const handleSignin = (db, bcrypt) => (req, res) => {
  const { Email, Password } = req.body;
  console.log(Email, Password);
  if (!Email || !Password) {
    return res.status(400).json("Incorrect Form Submission");
  }

  db.select("*")
    .from("user")
    .join("role", { "user.IdRole": "role.IdRole" })
    .where({ Email })
    .then(data => {
      console.log(data[0].Password);
      const isValid = bcrypt.compareSync(Password, data[0].Password);
      console.log(isValid);
      if (isValid) {
        const { Password, ...otherData } = data[0];
        return res.json(otherData);
      } else res.status(400).json("wrong credentials");
    })
    .catch(err => res.status(400).json("wrong credentials"));
};

module.exports = {
  handleSignin: handleSignin,
};
