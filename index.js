const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const booksRoute = require("./routes/books");

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/books", booksRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((error) => {
    console.log("Error connecting mongoose", error);
  });

app.listen(PORT, () => {
  console.log("App started");
});
