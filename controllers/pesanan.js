// Handling GET Pesanan
const getPesanan = db => (req, res) => {
  db.select("*")
    .from("pesanan")
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
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
      })
      .into("pesanan")
      .then(IdPesanan => {
        return trx("detailpesanan")
          .insert(handlingInserIdPesanan(IdPesanan, DetailPesanan))
          .then(data => {
            return res.json(data);
          })
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(err));
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
  deletePesanan,
};
