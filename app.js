const express       = require("express");


var app             = express();

app.listen(80, () => {
    console.log("server starts at port 80");
});

app.get("/", (req, res) => {
    res.send("main page");
});

app.get("/pucsu", (req, res) => {
    res.send("you reached the pucsu site :D");
});