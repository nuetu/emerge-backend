import express from "express";
import router from "./routes/index.js";

/**
 * Emerge Server
 *
 * This is the entry point for the Emerge Server. It provides the backend
 * music streaming functionality that makes Emerge work.
 *
 * Lucas Nunn 2022
 */

/* expressJS server initialization */
const app = express();
const PORT = process.env.PORT || 42069;

/* import routes */
app.use(router);

/* start server */
app.listen(PORT, () => {
  console.log(`Emerge Server listening on port ${PORT}`);
});
