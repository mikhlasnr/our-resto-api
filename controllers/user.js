const getUsers = db => (req, res) => {
  db.select("*")
    .from("user")
    .join("role", { "user.IdRole": "role.IdRole" })
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.status(400).json("wrong credentials"));
};

const getRoles = db => (req, res) => {
  db.select("*")
    .from("role")
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.status(400).json("Error Can't GET DATA ROLES"));
};
module.exports = {
  getUsers: getUsers,
  getRoles,
};
