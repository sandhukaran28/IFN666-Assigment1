const express = require("express");
const router = express.Router();
const { getAll, get, create,update,delete: deleteDriver } = require('../controllers/driver');

router.get("/",getAll);
router.get("/:id",get);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",deleteDriver);

module.exports = router;