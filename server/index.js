const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 9000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from soloSphere server...");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
