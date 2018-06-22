import dotenv from "dotenv";
dotenv.config();

import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import exphbs from "express-handlebars";

const app = express();
app.use(logger(process.env.MORGAN_FORMAT));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

import apiRoutes from "./routes/api-routes";
apiRoutes(app);

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = Promise;

app.listen(process.env.PORT, ()  => console.log("App running on http://localhost:" + process.env.PORT))