// express for routing api
const express = require("express");
const app = express();

// Socket.io Handling for transfer data realtime
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", socket => {
  console.log(`user connected: ${socket.id}`);
  socket.on("disconnect", socket => {
    console.log(`User is disconnected ${socket.id}`);
  });

  socket.on("message", data => {
    console.log(data);
    io.emit("message", data);
  });
});

// server listen
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("Server running...");
});

// Setting db
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

// import middleware
const cors = require("cors");

// ! Use Middleware
app.use(express.json());
app.use(cors());

// import controlers handler
const signin = require("./controllers/signin");

// create route api
app.get("/", (req, res) => {
  res.send("Server running...");
});
app.post("/signin", signin.handleSignin(db));
