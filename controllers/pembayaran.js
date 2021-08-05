const addPembayaran = db => (req, res) => {
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
    .then(inserts => {})
    .catch(error => res.status(400).json(error));
};
const getPembayaran = db => (req, res) => {
  const { IdPesanan } = req.params;
  db.select(
    "pembayaran.*",
    "user.Nama as NamaKasir",
    "pesanan.AtasNama as NamaPemesan",
    "pesanan.TotalHarga"
  )
    .from("pembayaran")
    .join("user", { "user.IdUser": "pembayaran.IdUser" })
    .join("pesanan", { "pesanan.IdPesanan": "pembayaran.IdPesanan" })
    .where("pembayaran.IdPesanan", "=", IdPesanan)
    .then(data => res.status(200).json(data[0]))
    .catch(error => res.status(400).json(error));
};
module.exports = {
  addPembayaran,
  getPembayaran,
};
