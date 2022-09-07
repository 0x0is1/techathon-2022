'use strict';
// absolute package imports
const express = require("express");
const commander = require("./utils/mysql_handler");
const loginHandler = require("./utils/loginHandler");
const constants = require("./constants/constants");
const infoParser = require("./utils/infoParser")
const TABLE_NAME = "blogpreview2";
const cors = require('cors');
// custom package imports

// express setup

const app = express();
const port = 3000;
app.use(cors());

// expree config setup
app.use(express.urlencoded())
app.use(express.json());

const urls = new constants.Urls();

// request handlers
//// handles user-pass login
app.post(urls.login, async (req, res) => {
    let user_data = req.body;
    await loginHandler.login(
        user_data.username, user_data.password, user_data.tz
    )
        .then((json) => {
            if (json.statusCode === 200) {
                const parsedData = infoParser.parseLlive(json.data);
                res.send(parsedData);
                return;
            }
            else {
                res.sendStatus(400);
                return;
            }
        }
        );
});

//// handles access token login
app.post(urls.loginvat, async (req, res) => {
    let user_data = req.body;
    await loginHandler.login_via_access_token(
        user_data.lact, user_data.act, user_data.tz
    )
        .then((json) => {
            if (json.statusCode !== 200) {
                res.sendStatus(400);
                return;
            }
            else {
                const parsedData = infoParser.parseLlive(json.data);
                res.send(parsedData);
                return;
            }
        });
});

app.get("/article-previews", async (req, res) => {
    var command = `select * from ${TABLE_NAME}`;
    if (req.query.sortby === "popular") {
        command += ` order by likes desc`;
    }
    else {
        command += ` order by postDate desc`; 
    }
    commander.RunCommand(command).then(data => res.send(data));
    // console.log(req.query);
});
app.post("/post-article", async (req, res) => {
    commander.RunCommand(`insert into ${TABLE_NAME}(title, content, author, postDate, likes) values("${encodeURIComponent(req.body.title)}","${encodeURIComponent(req.body.content)}","${encodeURIComponent(req.body.author)}","${req.body.postDate}", 0);`)
        .then(result => res.send(result));
});

app.get("/like-article/:guid", async (req, res) => {
    commander.RunCommand(`select likes from ${TABLE_NAME} where guid=${req.params.guid};`)
        .then((result) => {
            commander.RunCommand(`update ${TABLE_NAME} set likes=${result[0]["likes"]}+1 where guid=${req.params.guid};`).then(result => {
                res.sendStatus(200);
            });
        });
});

app.get("/article/:id", async (req, res) => {
    commander.RunCommand(`select * from ${TABLE_NAME} where guid=${req.params.id};`)
        .then((result) => {
            res.send(result);
        });
});

app.get("/search/:subquery", async (req, res) => {
    // console.log(`select * from ${TABLE_NAME} where "${req.params.subquery}" in (title, content, author);`)
    commander.RunCommand(`select * from ${TABLE_NAME} where "${req.params.subquery}" in (title, content, author);`)
        .then(result => res.send(result));
});

// app initializer
app.listen(port, () => {
    console.log(`[*] Listening on port ${port}...`);
});
