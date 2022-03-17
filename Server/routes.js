const express = require("express");

const router = express.Router();
const controllers = require("./controllers");

router.get("/view-customers", controllers.getCustomers);

router.get("/check-username/:uname", controllers.checkUsername);

router.post("/transfer-money", controllers.transfer);

router.get("/view-history", controllers.getHistory);

module.exports = router;
