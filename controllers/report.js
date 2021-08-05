const getIncomeByYear = db => (req, res) => {
  db("pesanan")
    .sum("TotalHarga as TotalPendapatan")
    .count("IdPesanan", { as: "TotalPembeli" })
    .where({ TahunDibuat: "2021", StatusBayar: "lunas" })
    .then(resPesanan => {
      db("pesanan")
        .count("IdMenu", { as: "TotalOrderMenu" })
        .join("detailPesanan", {
          "detailPesanan.IdPesanan": "pesanan.IdPesanan",
        })
        .where({ TahunDibuat: "2021", StatusBayar: "lunas" })
        .then(resTotalOrder => {
          db("pesanan")
            .select("BulanDibuat as bulan")
            .sum("TotalHarga as pendapatan")
            .where({ TahunDibuat: "2021" })
            .groupBy("BulanDibuat")
            .then(resDataChart => {
              res.status(200).json({
                ...resPesanan[0],
                ...resTotalOrder[0],
                dataChart: resDataChart,
              });
            });
        })
        .catch(error => res.status(400).json(error));
    })
    .catch(error => res.status(400).json(error));
};
module.exports = {
  getIncomeByYear,
};
