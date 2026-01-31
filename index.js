import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

// ✅ middlewares
app.use(cors({
  origin: "https://ishivastu.github.io",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ test route
app.get("/api/health", (req, res) => {
  res.json({
    name: "shivastu",
    age: 22
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
