const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
} else {
  console.log("MongoDB URI not configured. Running in demo mode without database.");
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Smart Farm API is running." });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/crops", require("./routes/cropRoutes"));
app.use("/api/weather", require("./routes/weatherRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/disease", require("./routes/diseaseRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
