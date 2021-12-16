const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const io = require('socket.io')(server);
const server = require('http').createServer(app);

io.on('connection', () => { console.log("Socket connected")});
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.sjson());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
const serverSocket = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

serverSocket.listen(1234);
