var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var studentRouter = require("./routes/student");
var courseRouter = require("./routes/courses");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const { authentication } = require("./middleware/products");
const multerRouter = require("./routes/multer");
const fs = require("fs");
const Image = require("./modals/image");

// const cloudinaryRouter = require("./routes/cloudinary");
const cloudinary = require("./utilities/cloudinary");

mongoose
  .connect("mongodb://localhost:27017/task")
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => {
    console.log("Received an Error");
  });
var app = express();

// view engine setup
app.set("/public", path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/student", studentRouter);
// app.use("/courses", courseRouter);
// app.use("/:id", studentRouter);
// app.use("/:id", courseRouter);
app.use("/signup", authRouter);
app.use("/api/product", authentication, productRouter);
app.use("/:id", productRouter);
// app.use("/api/cloudinary", cloudinaryRouter);
app.use("/image/upload", multerRouter);
app.use("/api", multerRouter);
app.post("/localstorage", async (req, res) => {
  const { token } = req.body;
  fs.writeFile("token.txt", token, (err) => {
    console.log(err);
  });
});
app.post("/cloudinary", async (req, res) => {
  const { image } = req.body;
  const uploadResult = await cloudinary.uploader.upload(
    image,
    {
      public_id: "images",
    },
    function (error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);
      try {
        res.status(200).json(uploadResult);
      } catch (err) {
        console.log(error);
      }
    }
  );
});
app.get("/cloudinary/get/images", async (req, res) => {
  try {
    const products = await Image.find({});
    console.log(products);
    res.status(200).send({ status: "ok", data: products });
  } catch (err) {
    res.status(404).send("Not Found...");
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(express.static("public"));
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
