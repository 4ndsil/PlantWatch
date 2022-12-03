const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;

// handlebars engine, set partails directory
app.engine(
  "handlebars",
  engine({
    partialsDir: __dirname + "/views/partials/",
  })
);

// set view engine & directory
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
