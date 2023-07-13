const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransactionController,
  deleteTransactionController,
} = require("../controllers/transactionController");

// Router object
const router = express.Router();

// Routes
router.post("/addTransaction", addTransaction);

//get transaction
router.post("/getTransaction", getAllTransaction);

// POST || EDIT TRANSACTION
router.post("/editTransaction/:transactionId", editTransactionController);

// POST || DELETE TRANSACTION
router.delete("/deleteTransaction/:transactionId", deleteTransactionController);

module.exports = router;
