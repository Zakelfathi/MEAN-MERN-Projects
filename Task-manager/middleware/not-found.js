const notFound = (req, res) => res.status(404).send("aucune route trouvee");

module.exports = notFound;
