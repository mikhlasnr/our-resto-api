// Hadnling get all karegori menu
const getKategoriMenu = db => (req, res) => {
  db.select("*")
    .from("kategori")
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

module.exports = {
  getKategoriMenu,
};
