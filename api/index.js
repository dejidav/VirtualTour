import express from "express";
import data from "./data.json";

const router = express.Router();

const contents = data;

router.get("/contents", (req, res) => {
  res.send({
    contents: contents,
  });
});

export default router;
