const NotFound = (req, res, next) => {
  res.status(404).json({ err: "Not Found" });
};

module.exports = NotFound;
