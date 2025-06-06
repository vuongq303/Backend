var express = require("express");
var cors = require("cors");
var config = require("./config/config");
var cookieParser = require("cookie-parser");
var indexRouter = require("./routes/index");
const path = require("path");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: config.client,
    credentials: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);

app.use(function (err, req, res, next) {
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error", {
    status: err.status || 500,
    message: err.message,
  });
});

module.exports = app;
