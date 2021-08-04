const addPembayaran = (db, axios) => (req, res) => {
  const { IdPesanan, IdUser, Nominal, Kembalian } = req.body;
  db.transaction(trx => {
    return trx
      .insert({
        IdPesanan,
        IdUser,
        Nominal,
        Kembalian,
        TglPembayaran: new Date(),
      })
      .into("pembayaran")
      .then(response => {
        return trx("pesanan")
          .where({ IdPesanan })
          .update({ StatusBayar: "lunas" })
          .then(data => {
            return res.status(200).json({ code: 200 });
          })
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .catch(trx.rollback);
  })
    .then(inserts => {
      console.log("new menu saved.");
    })
    .catch(error => res.status(400).json(error));
};
module.exports = {
  addPembayaran,
};
