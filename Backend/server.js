const express = require("express");
const cors = require("cors"); // Import CORS module
const app = express();
const port = 3001; // Backend server port

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.send("Too fucking hot in Brazil rn");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
