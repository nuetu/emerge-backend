import express from "express";

/* initialize express router */
const router = express.Router();

/**
 * GET /
 *
 * dummy test route
 */
router.get("/", (req, res) => {
  res.send("yo whattup");
});

export default router;
