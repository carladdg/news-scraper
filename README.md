# news-scraper
Scraping the news using Cheerio and Mongoose

#### There's always so much change going on in the tech world. You need to stay informed.

This app scrapes the TechCrunch website and shows you all their latest home page articles. 

You can save articles you like to the "Saved Articles" page so that you can easily come back to them later.

You can also view and leave notes on various articles to organize your thoughts and see what other people think.

Here's to keeping up with the future! :alien:

### Technologies Used

* Mongoose / MongoDB
* Cheerio / Request
* Bootstrap 4
* ES6 and Babel

### Areas for Further Development
* More robust article information, including images, publication dates, etc.
    * Similarly, a date for when a note was posted
* Adding in a "next page" or "load more" feature when there are more than a certain number of articles in the database.
* Users should have to create accounts and sign in to use all the features of the site. This will allow for...
    * individual users to have their own individual set of saved articles.
    * notes to be visibly associated with a username.
    * users to only be able to delete their own notes.
