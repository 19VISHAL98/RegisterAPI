const router = require("express").Router();
const { createUser ,getUser } = require("./controllers");

router.post("/register", createUser);
router.get("/users", getUser);

module.exports = router;
