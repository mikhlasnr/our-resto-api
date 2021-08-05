const convertBulanToName = bulan => {
  if (bulan === "1") return "Januari";
  if (bulan === "2") return "Februari";
  if (bulan === "3") return "Maret";
  if (bulan === "4") return "April";
  if (bulan === "5") return "Mei";
  if (bulan === "6") return "Juni";
  if (bulan === "7") return "Juli";
  if (bulan === "8") return "Agustus";
  if (bulan === "9") return "September";
  if (bulan === "10") return "Oktober";
  if (bulan === "11") return "November";
  if (bulan === "12") return "Desember";
  return "";
};

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
              const resultConvertBulan = resDataChart.map(item => {
                return { namaBulan: convertBulanToName(item.bulan), ...item };
              });
              res.status(200).json({
                ...resPesanan[0],
                ...resTotalOrder[0],
                dataChart: resultConvertBulan,
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
