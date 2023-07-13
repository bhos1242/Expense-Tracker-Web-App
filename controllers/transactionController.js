const transactionModel = require("../models/transactionModel");
const moment = require("moment");

const getAllTransaction = async (req, res) => {
  try {
    const { frequency } = req.body;
    const { selectedDate } = req.body; // Assuming selectedDate is defined
    const { type } = req.body; // Assuming selectedDate is defined

    const query =
      frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "days").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          };

    const transactions = await transactionModel.find({
      ...query,
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch transactions." });
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).json({
      message: "Transaction added successfully.",
      transaction: newTransaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add transaction." });
  }
};

const editTransactionController = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const updatedTransaction = await transactionModel.findByIdAndUpdate(
      transactionId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update transaction." });
  }
};

const deleteTransactionController = async (req, res) => {
  try {
    const { transactionId } = req.params;

    await transactionModel.findByIdAndDelete(transactionId);

    res.status(200).json({ message: "Transaction deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete transaction." });
  }
};

module.exports = {
  getAllTransaction,
  addTransaction,
  editTransactionController,
  deleteTransactionController,
};
