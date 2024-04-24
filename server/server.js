require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({message: "Server is running"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
