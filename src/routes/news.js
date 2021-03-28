const express = require("express");
const newController = require("../app/controllers/NewController");
const router = express.Router();

router.use("/", newController.index);
router.use("/news/:slug", newController.detail);

module.exports = router;
