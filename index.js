require("dotenv").config();
const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;

// routes
app.use("/api/houseplant", require("./server/routes/houseplant"));

// handlebars engine, set partails directory
app.engine(
  "handlebars",
  engine({
    partialsDir: __dirname + "/client/views/partials/",
  })
);

// set view engine & directory
app.set("view engine", "handlebars");
app.set("views", __dirname + "/client/views");

// serve static files
app.use("/static", express.static(__dirname + "/client/public"));

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
