import config from "./config.js";
import express from "express";
import router from "./api/Router";
import sassMiddleware from "node-sass-middleware";
import path from "path";

import serverRender from "./serverRender";

const server = express();
server.set("view engine", "ejs"); //set template engine
server.use(express.json());
//use sass style
server.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
  })
);

//renders node application/pages/data etc
server.get(["/", "/contests/:contestId"], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render("index", {
        initialMarkup,
        initialData,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send("bad request");
    });
});

import './api/seeder'

server.use("/api", router); // renders api requests
server.use(express.static("public")); //renders public files

server.listen(config.port, config.host, () => {
  console.info("Express is listening on port ", config.port);
});
