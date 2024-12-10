const express = require("express");
const server = express();
const MoviesRouter = require("./routes/Movies");
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || "3001";

server.use("/api/movies", MoviesRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${HOST}:${PORT}`);
});

server.get("/", (req, res) => {
  res.send("Server is up and running");
});
