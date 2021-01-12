const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
const stackoverflowAPI = require("./src/auth/stackoverflow_auth");

app.use(require("cors")());
app.use(express.static(__dirname + "/public"));

app.use(bodyparser.urlencoded({ extended: true }));


app.use("/stackoverflow", stackoverflowAPI);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => console.log(`App is running at port ${port}...`));