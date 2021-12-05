const { Router } = require("express");

const {
  renderFeedback,
  renderHome,
  renderError,
} = require("../../controllers/view");

const router = Router();

router.get("/", renderHome);
router.get("/feedback", renderFeedback);
router.get("*", renderError);

module.exports = router;
