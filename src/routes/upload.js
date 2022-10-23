import express from "express";
import multer from "multer";

/**
 * Upload Routes
 *
 * These routes are used for uploading files to Emerge
 *
 * Lucas Nunn 2022
 */

/* initialize express router */
const streaming = express.Router();

/* initialize multer for file uploading */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
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
  res.send({
    status: true,
    message: "file uploaded successfully",
  });
});

export default streaming;
