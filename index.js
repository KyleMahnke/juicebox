require("dotenv").config();
const { PORT = 4000 } = process.env;
const express = require("express");
const server = express();

const morgan = require("morgan");
server.use(morgan("dev"));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

server.use(express.json());

const apiRouter = require("./api");
// localhost:3000/api
server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

// localhost:3000
server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
