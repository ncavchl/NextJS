export default (req, res) => {
  res.statueCode = 200;
  res.json({ name: req.query.id });
};
