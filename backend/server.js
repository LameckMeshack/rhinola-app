import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/rhinola", {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
  // useCreateIndex: true
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
