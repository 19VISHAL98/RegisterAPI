const router = require("express").Router();
const { createUser ,getUser } = require("./controllers");
const { upload } = require("./uplodDocs");

router.post("/register" , upload.array("docs" ,5 ) , createUser);
router.get("/users", getUser);

module.exports = router;
