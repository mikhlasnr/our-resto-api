const handleSignin = db => (req, res) => {
  const { email, kataSandi } = req.body;

  if (!email || !kataSandi) {
    return res.status(400).json("Incorrect Form Submission");
  }

  db.select("*")
    .from("user")
    .join("role", { "user.IdRole": "role.IdRole" })
    .where({ email })
    .then(data => {
      if (data[0].Password === kataSandi) {
        const { Password, ...otherData } = data[0];
        return res.json(otherData);
      } else res.status(400).json("wrong credentials");
    })
    .catch(err => res.status(400).json("wrong credentials"));
};

module.exports = {
  handleSignin: handleSignin,
};
