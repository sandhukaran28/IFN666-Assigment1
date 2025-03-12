const express = require("express");
const indexRouter = require("./src/routes/index"); 
const mediaTypeValidator = require("./src/middleware/mediaTypeValidator");
// Put your code here

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mediaTypeValidator);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, IFN666!");
});

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Server is listening on :${port}`)
});

module.exports = app;