require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(res => {
        console.log("db connected")
    }).catch(e => console.log(e))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);






app.listen(5000, () => {
    console.log("server is running")
})