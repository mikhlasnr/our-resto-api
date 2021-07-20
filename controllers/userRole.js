// Get Data Roles
const getRoles = db => (req, res) => {
  db.select("*")
    .from("role")
    .orderBy("NamaRole")
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(error => res.status(400).json(error));
};
module.exports = {
  getRoles,
};
