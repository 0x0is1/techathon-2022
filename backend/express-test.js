'use strict';
// absolute package imports
const express = require("express");
const getter = require("./utils/mysql_handler");

// custom package imports

// express setup
const app = express();
const port = 3000;

// expree config setup
app.use(express.urlencoded())
app.use(express.json());

// request handlers
//// handles user-pass login
app.get("/article-previews", async (req, res) => {
    getter.getData("SELECT * FROM blogpreview").then(data => res.send(data));
    // console.log(req.query);
});
app.post("")
// app initializer
app.listen(port, () => {
    console.log(`[*] Listening on port ${port}...`);
});
