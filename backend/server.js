const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const userRoute = require("./routes/userRoute");
const transactionRoute = require("./routes/transactionRoute");
const path = require("path");
// Config dot env file
dotenv.config();

// Connect to the database
connectDb();

// Create an Express app
const app = express();

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

//static files
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join, "../client/build/index.html");
});

// User route
app.use("/api/user", userRoute);

// Transaction routes
app.use("/api/transactions", transactionRoute);

// Port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
