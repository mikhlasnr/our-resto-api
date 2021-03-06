// *===START HANDLING KATEGORI MENU===
const getKategoriMenu = db => (req, res) => {
  db.select("*")
    .from("kategori")
    .orderBy("NamaKategori")
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
const getKategoriMenuById = db => (req, res) => {
  const { IdKategori } = req.params;
  db.select("*")
    .from("kategori")
    .where("IdKategori", "=", IdKategori)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
const addKategoriMenu = db => (req, res) => {
  const { NamaKategori } = req.body;
  db.transaction(trx => {
    return trx
      .insert({ NamaKategori })
      .into("kategori")
      .then(response => {
        return res.status(200).json(response);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(inserts => {})
    .catch(error => {
      return res.status(400).json(error);
    });
};
const handlingAddKategoriMenuImage = db => (req, res) => {
  const { ImageUrl } = req.body;
  const { IdKategori } = req.params;
  db("kategori")
    .where("IdKategori", "=", IdKategori)
    .update({
      Foto: ImageUrl,
    })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
const deleteKategoriMenu = db => (req, res) => {
  const { IdKategori } = req.params;
  db("kategori")
    .where({ IdKategori })
    .del()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(200).json(error));
};
// *===END HANDLING KATEGORI MENU===

module.exports = {
  getKategoriMenu,
  getKategoriMenuById,
  addKategoriMenu,
  handlingAddKategoriMenuImage,
  deleteKategoriMenu,
};
