import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { log } from "../utils.js";

/**
 * Streaming Routes
 *
 * These routes are used for actual audio streaming and related
 * functions
 *
 * Lucas Nunn 2022
 */

/* initialize express router */
const streaming = express.Router();

/* directory / path name */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = "/routes/streaming.js";

/**
 * GET /
 *
 * dummy test route
 */
streaming.get("/streaming/queue", (req, res) => {
  log(filename, "getting song queue");

  /* get song queue */
  fs.readdir(__dirname + "/../../streams/", (error, files) => {
    if (error) {
      log(filename, "failed getting song queue");

      /* something failed, send error */
      res.send({
        status: false,
        message: "obtaining queue failed",
      });
    } else {
      log(filename, "succeeded getting song queue");
      log(filename, files);

      /* success, send song names */
      res.send({
        status: true,
        message: "queue",
        body: { files },
      });
    }
  });
});

export default streaming;
