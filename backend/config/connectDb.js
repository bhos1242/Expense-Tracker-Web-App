const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://hopesalive1242:soZjqPXIP4cJlZST@ecom.uylaa3x.mongodb.net/expensetracker?retryWrites=true&w=majority`
    );
    console.log(
      `MongoDb connected on ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
