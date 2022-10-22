import express from "express";

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

/**
 * GET /
 *
 * dummy test route
 */
streaming.get("/", (req, res) => {
  res.send("hello");
});

export default streaming;
