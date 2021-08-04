// Handling GET Pesanan
const getPesanan = db => (req, res) => {
  console.log(req.query.getCurrentDay);
  if (req.query.getCurrentDay === "true") {
    let today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const dd = String(today.getDate()).padStart(2, "0");
    today = `${yyyy}-${mm}-${dd} 00:00:00`;
    console.log(today);
    db.select("*")
      .from("pesanan")
      .where("TanggalDibuat", ">=", today)
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(error => {
        return res.status(400).json(error);
      });
  } else {
    console.log("masuk pak eko");
    db.select("*")
      .from("pesanan")
      .where(req.query)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(400).json(error));
  }
};

// Handling Add Pesanan
const addPesanan = db => (req, res) => {
  const { IdUser, AtasNama, NoMeja, TotalQuantity, TotalHarga, DetailPesanan } =
    req.body;

  const handlingInserIdPesanan = (idpesanan, detailpesanan) => {
    return detailpesanan.map(item => {
      return { idpesanan, ...item };
    });
  };

  db.transaction(trx => {
    trx
      .insert({
        IdUser,
        AtasNama,
        NoMeja,
        TotalQuantity,
        TotalHarga,
        TanggalDibuat: new Date(),
      })
      .into("pesanan")
      .then(IdPesanan => {
        return trx("detailpesanan")
          .insert(handlingInserIdPesanan(IdPesanan, DetailPesanan))
          .then(data => {
            return res.status(200).json({ code: 200 });
          })
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(err));
};

// Handling update status masak
const updateStatusMasak = db => (req, res) => {
  const { IdPesanan } = req.params;
  db("pesanan")
    .where("IdPesanan", "=", IdPesanan)
    .update({ StatusMasak: "selesai" })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};
// Handling update status antar
const updateStatusAntar = db => (req, res) => {
  const { IdPesanan } = req.params;
  db("pesanan")
    .where("IdPesanan", "=", IdPesanan)
    .update({ StatusAntar: "sudah" })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

// Handling Delete Pesanan
const deletePesanan = db => (req, res) => {
  const { IdPesanan } = req.params;
  console.log(IdPesanan);
  db("pesanan")
    .where({ IdPesanan })
    .del()
    .then(response => {
      console.log(response);
      return res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      return res.status(400).json(error);
    });
};

module.exports = {
  getPesanan,
  addPesanan,
  updateStatusMasak,
  updateStatusAntar,
  deletePesanan,
};
