/**
 * Emerge Server
 *
 * This is the entry point for the Emerge server. It provides the backend
 * music streaming functionality that makes Emerge work.
 *
 * Lucas Nunn 2022
 */

/* expressJS server initialization */
const express = require("express");
const app = express();
const PORT = process.env.PORT || 42069;

/**
 * GET /
 *
 * dummy endpoint
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* start expressJS server listening */
app.listen(PORT, () => {
  console.log(`Emerge Server listening on port ${PORT}`);
});
