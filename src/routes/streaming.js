import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

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

/**
 * GET /
 *
 * dummy test route
 */
streaming.get("/streaming/queue", (req, res) => {
  /* get song queue */
  fs.readdir(__dirname + "/../../streams/", (error, files) => {
    if (error) {
      /* something failed, send error */
      res.send({
        status: false,
        message: "obtaining queue failed",
      });
    } else {
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
