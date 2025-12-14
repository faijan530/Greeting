import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API is running");
});

// version endpoint
app.get("/version", (req, res) => {
  res.json({ version: "0.1.0" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
