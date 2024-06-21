const express = require("express");
const { getAllEmployees, getSpecificEmployee } = require("../controllers/rest");
const router = express.Router();

router.get("/employees", getAllEmployees);

router.get("/employee/:eid", getSpecificEmployee);

module.exports = router;
