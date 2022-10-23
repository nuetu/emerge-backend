import express from "express";
import cors from "cors";
import streaming from "./routes/streaming.js";
import upload from "./routes/upload.js";
import { log } from "./utils.js";

/**
 * Emerge Server
 *
 * This is the entry point for the Emerge Server. It provides the backend
 * music streaming functionality that makes Emerge work.
 *
 * Lucas Nunn 2022
 */

/* expressJS server initialization */
const PORT = process.env.PORT || 42069;
const app = express();
app.use(cors());

/* declare routes */
app.use(streaming);
app.use(upload);
app.use(express.static("public"));

/* start server */
app.listen(PORT, () => {
  log(`Emerge Server listening on port ${PORT}`);
});
