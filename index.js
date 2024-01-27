const express = require("express");

const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/app")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("Mongo error", err));

// middlware - plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
