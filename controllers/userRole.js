// Get Data Roles
const getRoles = db => (req, res) => {
  db.select("*")
    .from("role")
    .then(data => {
      console.log(data);
      return res.status(200).json(data);
    })
    .catch(error => res.status(400).json(error));
};
module.exports = {
  getRoles,
};
