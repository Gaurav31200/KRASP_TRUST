const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(cors());
// dotenv.config();

app.use("/api", routes);
//bFbIjFH63V0CLfHb

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ccllf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected Successfully");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
