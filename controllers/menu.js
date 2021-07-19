// *===START HANDLING MENU===
const getMenu = db => (req, res) => {
  db.select("*")
    .from("menu")
    .whereNull("IdKategori")
    .then(data => {
      return db
        .select("*")
        .from("menu")
        .join("kategori", { "kategori.IdKategori": "menu.IdKategori" })
        .then(response => {
          return res.status(200).json([...response, ...data]);
        })
        .catch(error => res.status(400).json(error));
    })
    .catch(error => res.status(400).json(error));
};

const getMenuByKategori = db => (req, res) => {
  const { IdKategori } = req.params;
  db.select("*")
    .from("menu")
    .where("IdKategori", "=", IdKategori)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
// *===END HANDLING MENU===

module.exports = {
  getMenu,
  getMenuByKategori,
};
