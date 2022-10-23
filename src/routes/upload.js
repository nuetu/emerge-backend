import express from "express";
import multer from "multer";
import exec from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { log } from "../utils.js";

/**
 * Upload Routes
 *
 * These routes are used for uploading files to Emerge
 *
 * Lucas Nunn 2022
 */

/* initialize express router */
const streaming = express.Router();

/* directory / path name */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = "/routes/upload.js";

/* initialize multer for file uploading */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

/**
 * POST /upload/song
 *
 * upload a song to Emerge
 * convert song to HLS friendly format and store
 */
streaming.post("/upload/song", upload.single("file"), async (req, res) => {
  log(filename, "uploading song");

  /* check if file exists */
  if (!req.file) {
    log(filename, "song upload failed");
    res.send({
      status: false,
      message: "no file found",
    });
    return;
  }

  /* run conversion shell script */
  exec.exec(
    __dirname + `/../../convert.sh ${req.body.id} ${req.file.filename}`,
    (error, stdout, stderr) => {
      if (error) {
        log(filename, "song upload failed");
        console.log(stderr);
        console.log(error);

        /* send error response */
        res.send({
          status: false,
          message: "file upload failed",
        });
      } else {
        log(filename, `song upload succeeded <${req.file.filename}>`);

        /* send success response */
        res.send({
          status: true,
          message: "file uploaded successfully",
          body: { id: req.body.id },
        });
      }
    }
  );
});

export default streaming;
