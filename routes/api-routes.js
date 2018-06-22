import scrapeSite from "./scraper";
import db from "../models";

export default app => {
    app.get("/scrape", (request, response) => {
        scrapeSite(response);
    })

    app.get("/", (request, response) => {
        db.Article.find()
        .populate("notes")
        .then(found => {
            const handlebarsObject = {
                home: true,
                articles: found
            }
            response.render("index", handlebarsObject);
        })
        .catch(error => response.json(error));
    })

    app.get("/saved", (request, response) => {
        db.Article.find({ saved: true })
        .populate("notes")
        .then(foundArticles => {
            console.log(foundArticles);
            const handlebarsObject = {
                home: false,
                articles: foundArticles
            }
            response.render("index", handlebarsObject);
        })
        .catch(error => response.json(error));
    })

    app.put("/save/:_id", (request, response) => {
        db.Article.findOneAndUpdate({ _id: request.params._id }, { saved: request.body.save }, { new: true })
        .then(updated => response.send("Save status updated."))
        .catch(error => response.json(error))
    })

    app.post("/submit", (request, response) => {
        db.Note.create({ body: request.body.note })
        .then(createdNote => {
            db.Article.findOneAndUpdate({ _id: request.body._id }, { $push: { notes: createdNote._id } }, { new: true })
            .then(updatedArticle => response.send("Note added."))
            .catch(error => response.json(error));
        })
    })
}