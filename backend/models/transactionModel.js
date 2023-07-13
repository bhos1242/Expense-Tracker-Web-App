const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: [true, "User ID is required"],
    },
    amount: {
      type: Number,
      required: [true, "Transaction amount is required"],
    },
    type: {
      type: String,
      required: [true, "Transaction type is required"],
    },
    category: {
      type: String,
      required: [true, "Transaction category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Transaction description is required"],
    },
    date: {
      type: Date,
      required: [true, "Transaction date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = transactionModel;
