const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("*/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
})

app.listen(process.env.PORT || 3060, () => console.log("Server is running..."))