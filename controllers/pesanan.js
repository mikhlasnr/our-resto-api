// Handling Add Menu

const addPesanan = (db, axios) => (req, res) => {
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

const deletePesanan = db => (req, res) => {
  const { IdPesanan } = req.params;

  db("pesanan")
    .where({ IdPesanan })
    .del()
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(400).json(error);
    });
};
module.exports = {
  addPesanan,
};
