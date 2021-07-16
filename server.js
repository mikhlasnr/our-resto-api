// !express for routing api
const express = require("express");
const app = express();

// ! handling has Password
const bcrypt = require("bcryptjs");

// !Socket.io Handling for transfer data realtime
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", socket => {
  console.log(`user connected: ${socket.id}`);
  socket.on("disconnect", socket => {
    console.log(`User is disconnected ${socket.id}`);
  });
});

// !server listen
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("Server running...");
});

// !Setting db
const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "our_resto_db",
  },
});

// !import middleware
const cors = require("cors");
const fileUpload = require("express-fileupload");

// !Use Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(fileUpload());

// -------- START create route api --------
// !import controlers handler
const signin = require("./controllers/signin");
const user = require("./controllers/user");
const menu = require("./controllers/menu");

app.get("/", (req, res) => {
  res.send("Server running...");
});

// ROUTE API SIGNIN
app.post("/signin", signin.handleSignin(db, bcrypt));

// ROUTE API USER
app.get("/users", user.getUsers(db));
app.get("/user/:IdUser", user.getUserById(db));
app.get("/users/roles", user.getRoles(db));

app.post("/user/add", user.addUser(db, bcrypt));
app.post("/user/validation-email", user.handlingEmailExist(db));
app.post(
  "/user/validation-email/on-update",
  user.handlingEmailExistOnUpdate(db)
);

app.put("/user/add/image/:IdUser", user.handlingAddUserImage(db));
app.put("/user/update/:IdUser", user.updateUser(db, bcrypt));

app.delete("/user/delete/:IdUser", user.deleteUser(db));

// ROUTE API MENU
app.get("/menus/kategori", menu.getKategoriMenu(db));

// --------END create route api --------
