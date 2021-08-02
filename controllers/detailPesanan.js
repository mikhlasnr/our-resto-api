// Handling GET Pesanan
const getDetailPesanan = db => (req, res) => {
  const { IdPesanan } = req.params;
  db.select("*")
    .from("detailpesanan")
    .join("menu", { "menu.IdMenu": "detailpesanan.IdMenu" })
    .where({ IdPesanan })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

module.exports = {
  getDetailPesanan,
};
