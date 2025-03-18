const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:5050" // or your frontend url
  }
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.listen(3001);
console.log("server listening on port 3001");