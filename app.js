const express = require("express");
const server = express();
const MoviesRouter = require("./routes/Movies");
const NotFound = require("./middlewares/NotFound");
const ServerErrorsHandler = require("./middlewares/ServerErrors");

const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || "3001";

server.get("/", (req, res) => {
  res.send("Server is up and running");
});

server.use("/api/movies", MoviesRouter);

server.use(NotFound);

server.use(ServerErrorsHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${HOST}:${PORT}`);
});
