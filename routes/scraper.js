import cheerio from "cheerio";
import request from "request";
import db from "../models";

const scrapeSite = (serverResponse) => {
    request("https://techcrunch.com", (error, response, html) => {
        const $ = cheerio.load(html);

        $("h2.post-block__title").each((i, element) => {
            const title = $(element).children().text()
                .split(/\n?\t/)
                .filter(value => value)[0];
            const uri = $(element).children().attr("href");
            const author = $(element).next().find("a").text()
                .split(/\n?\t/)
                .filter(value => value)
                .join(", ");
            const blurb = $(element).parent().next().text()
                .split(/\n?\t/)
                .filter(value => value)
                .concat("...")
                .join("");

            if (author) {
                const article = {
                    title: title,
                    uri: uri,
                    author: author,
                    blurb: blurb
                }
    
                db.Article.find({ uri: article.uri })
                .then(found => {
                    if (!found.length) {
                        db.Article.create(article)
                        .catch(error => serverResponse.json(error));
                    }
                })
                .catch(error => serverResponse.json(error));
            }
        })

        serverResponse.send("Scrape complete.");
    })
}

export default scrapeSite;