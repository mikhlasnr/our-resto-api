const { response } = require("express");

const getUsers = db => (req, res) => {
  db.select("*")
    .from("user")
    .join("role", { "user.IdRole": "role.IdRole" })
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.status(400).json("wrong credentials"));
};

const addUser = db => (req, res) => {
  db.transaction(trx => {
    return trx
      .insert(req.body)
      .into("user")
      .then(user => {
        return res.status(200).json(user);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(inserts => {
      console.log("new user saved.");
    })
    .catch(error => {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      // console.log(error);
      return res.status(400).json(error);
    });
};

const handlingAddUserImage = db => (req, res) => {
  const { data } = req.files.image;
  const { IdUser } = req.params;
  db("user")
    .where("IdUser", "=", IdUser)
    .update({
      Foto: data,
    })
    .then(response => {
      console.log(response);
      return res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      return res.status(400).json(error);
    });
};

const getRoles = db => (req, res) => {
  db.select("*")
    .from("role")
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => res.status(400).json("Error Can't GET DATA ROLES"));
};

module.exports = {
  getUsers,
  getRoles,
  addUser,
  handlingAddUserImage,
};
