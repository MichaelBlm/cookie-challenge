const express = require("express");
const cookeParser = require("cookie-parser");
const app = express();
const port = 8080;

app.use(cookeParser());

app.listen(port, () => console.log("Express server is listening"));

app.get("/login", (request, response) => {
  var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: "strict",
  };
  response.cookie("name", "user", opts);
  response.status(200).send(`Hello ${request.cookies.name}`);
});
