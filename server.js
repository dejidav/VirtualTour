import config from "./config.js";
import express from "express";
import apiRouter from "./api";

const server = express();

server.use("/api", apiRouter); // renders api requests
server.use(express.static("public")); //renders public files

server.listen(config.port, config.host, () => {
  console.info("Express is listening on port ", config.port);
});
