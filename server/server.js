const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("comment", (value) => {
    console.log("messsage came:", value);
    socket.emit("receive", value);
  });
});
