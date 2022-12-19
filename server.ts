const express = require("express");
const app = express();
const port = 3000;

app.all("/", (req: void, res: { send: (responseText: string) => void }) => {
  res.send("Hello World!");
});

module.exports = () => {
  app.listen(port, () => {
    console.log("Express.js: Server Started!");
  });
};