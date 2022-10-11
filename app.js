import express from "express";
import cors from "cors";
import path from "path";
import streaming from "./routes/streaming.js";

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

/* import routes */
app.use(express.static(path.resolve("audio")));
app.use(streaming);

/* start server */
app.listen(PORT, () => {
  console.log(`[emerge] - Emerge Server listening on port ${PORT}`);
});
