const { response } = require("express");
const util = require("./controllers.util");

// *===START HANDLING MENU===
const getMenu = db => (req, res) => {
  db.select("*")
    .from("menu")
    .whereNull("IdKategori")
    .then(data => {
      return db
        .select(
          "menu.IdMenu",
          "menu.NamaMenu",
          "menu.Harga",
          "menu.Stok",
          "kategori.IdKategori",
          "kategori.NamaKategori",
          "menu.Foto"
        )
        .from("menu")
        .join("kategori", { "menu.IdKategori": "kategori.IdKategori" })
        .orderBy("kategori.NamaKategori")
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

const addMenu = db => (req, res) => {
  const { NamaMenu, ...otherData } = req.body;
  const namaCapitalize = util.handlingCapitalize(NamaMenu);
  db.transaction(trx => {
    return trx
      .insert({ NamaMenu: namaCapitalize, ...otherData })
      .into("menu")
      .then(response => res.status(200).json(response))
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(inserts => {
      console.log("new menu saved.");
    })
    .catch(error => res.status(400).json(error));
};

const handlingAddMenuImage = db => (req, res) => {
  const { ImageUrl } = req.body;
  const { IdMenu } = req.params;
  db("menu")
    .where("IdMenu", "=", IdMenu)
    .update({
      Foto: ImageUrl,
    })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
// *===END HANDLING MENU===

module.exports = {
  getMenu,
  getMenuByKategori,
  addMenu,
  handlingAddMenuImage,
};
