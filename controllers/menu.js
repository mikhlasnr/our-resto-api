const util = require("./controllers.util");

// *===START HANDLING MENU===

// Handling Get Menu
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

const getMenuById = db => (req, res) => {
  const { IdMenu } = req.params;
  db.select("*")
    .from("menu")
    .where("IdMenu", "=", IdMenu)
    .then(data => res.status(200).json(data[0]))
    .catch(error => res.status(400).json({ error }));
};
const getMenuByKategori = db => (req, res) => {
  const { IdKategori } = req.params;
  db.select(
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
    .where("menu.IdKategori", "=", IdKategori)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
// Handling Add Menu
const addMenu = db => (req, res) => {
  const { NamaMenu, ...otherData } = req.body;
  const namaCapitalize = util.handlingCapitalize(NamaMenu);
  db.transaction(trx => {
    return trx
      .insert({ NamaMenu: namaCapitalize, ...otherData })
      .into("menu")
      .then(response => {
        res.status(200).json(response);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(inserts => {})
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

// Handling Update Menu
const updateMenu = db => (req, res) => {
  const { IdMenu } = req.params;
  // req.body = {NamaKetegori,Harga,Stok,IdKategori}
  const { NamaMenu, ...otherData } = req.body;
  const namaCapitalize = util.handlingCapitalize(NamaMenu);
  db("menu")
    .where("IdMenu", "=", IdMenu)
    .update({ NamaMenu: namaCapitalize, ...otherData })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
// START Handling WHen Create Or Delete Pesanan
const decrementStokMenu = db => (req, res) => {
  const { IdMenu } = req.params;
  const { Quantity } = req.body;
  db("menu")
    .where("IdMenu", "=", IdMenu)
    .decrement("Stok", Quantity)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

const incrementStokMenu = db => (req, res) => {
  const { IdMenu } = req.params;
  const { Quantity } = req.body;
  db("menu")
    .where("IdMenu", "=", IdMenu)
    .increment("Stok", Quantity)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
// END Handling WHen Create Or Delete Pesanan
// Handling Delete Menu
const deleteMenu = db => (req, res) => {
  const { IdMenu } = req.params;
  db("menu")
    .where({ IdMenu })
    .del()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(400).json(error);
    });
};
// *===END HANDLING MENU===

module.exports = {
  getMenu,
  getMenuById,
  getMenuByKategori,
  addMenu,
  handlingAddMenuImage,
  deleteMenu,
  updateMenu,
  decrementStokMenu,
  incrementStokMenu,
};
