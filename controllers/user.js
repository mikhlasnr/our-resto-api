const getUsers = db => (req, res) => {
  db.select(
    "user.IdUser",
    "user.Email",
    "user.Nama",
    "user.NoTelp",
    "user.IdRole",
    "user.StatusOnline",
    "user.Alamat",
    "user.Foto",
    "role.NamaRole"
  )
    .from("user")
    .join("role", { "user.IdRole": "role.IdRole" })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

const getUserById = db => (req, res) => {
  const { IdUser } = req.params;

  db.select("*")
    .from("user")
    .where({ IdUser })
    .then(data => res.status(200).json(data[0]))
    .catch(error => res.status(400).json(error));
};

// START API ADD USER
const addUser = (db, bcrypt) => (req, res) => {
  const { Email, Nama, Password, NoTelp, IdRole, Alamat } = req.body;
  const hash = bcrypt.hashSync(Password, 8);
  db.transaction(trx => {
    return trx
      .insert({ Email, Nama, NoTelp, IdRole, Alamat, Password: hash })
      .into("user")
      .then(user => res.status(200).json(user))
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(inserts => {
      console.log("new user saved.");
    })
    .catch(error => {
      if (error.errno === 1062) return res.status(400).json("Email Sudah Ada!");
      return res.status(400).json("error");
    });
};

const handlingAddUserImage = db => (req, res) => {
  const { ImageUrl } = req.body;
  const { IdUser } = req.params;
  db("user")
    .where("IdUser", "=", IdUser)
    .update({
      Foto: ImageUrl,
    })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

const handlingEmailExist = db => (req, res) => {
  const { Email } = req.body;
  db("user")
    .count("Email as CountEmail")
    .where({ Email })
    .then(data => res.status(200).json(!!data[0].CountEmail))
    .catch(error => res.status(400).json(error));
};
// END API ADD USER
// API UPDATE USER
const updateUser = (db, bcrypt) => (req, res) => {
  let inputData = {};
  const { IdUser } = req.params;

  if (req.body.Password) {
    const { Password: Pass, ...otherValues } = req.body;
    const Password = bcrypt.hashSync(Pass, 8);
    inputData = { Password, ...otherValues };
  } else inputData = req.body;
  console.log(inputData);

  db("user")
    .where("IdUser", "=", IdUser)
    .update(inputData)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

// API DELETE USER
const deleteUser = db => (req, res) => {
  const { IdUser } = req.params;
  db("user")
    .where({ IdUser })
    .del()
    .then(res => res.status(200).json(res))
    .catch(error => res.status(200).json(error));
};

// Get Data Roles
const getRoles = (db, bcrypt) => (req, res) => {
  db.select("*")
    .from("role")
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
};

module.exports = {
  getUsers,
  getRoles,
  addUser,
  handlingAddUserImage,
  handlingEmailExist,
  getUserById,
  updateUser,
  deleteUser,
};
