const connection = require("../database/connection");

function index(req, res) {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ err: err });

    res.json({
      movies: results,
      count: results.length,
    });
  });
}

function show(req, res) {
  const id = req.params.id;

  const sql = `SELECT * FROM movies WHERE id = ?`;

  const reviewsSql = `SELECT * FROM reviews WHERE movie_id=?`;

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ err: err });

    if (results.length == 0)
      return res.status(404).json({ err: "Movie not found" });

    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err) return res.status(500).json({ err: err });
      console.log("reviews", reviewsResults);
      const movie = {
        ...results[0],
        reviews: reviewsResults,
      };
      res.json(movie);
    });
  });
}

module.exports = {
  index,
  show,
};
