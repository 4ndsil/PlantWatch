require("dotenv").config();
const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use("/static", express.static(__dirname + "/client/public"));

// api routes
app.use("/api/db", require("./server/routes/db"));
app.use("/api/houseplant", require("./server/routes/houseplant"));

// public routes
app.use("/configure", require("./server/routes/configure"));
app.use("/", require("./server/routes/views"));

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

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is running. App listening on port " + PORT
    );
  else console.log("Failed to start server", error);
});
