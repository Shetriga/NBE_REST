const express = require("express");
const app = express();
const port = 3000;
const restRoutes = require("./routes/rest");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Policy headers and permissions
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/rest", restRoutes);

// Error Handler
app.use((error, req, res, next) => {
  console.log(error.message);
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json({
    errorMessage: error.message,
  });
});

app.listen(port, () => {
  console.log(`Server is up and running!`);
});
