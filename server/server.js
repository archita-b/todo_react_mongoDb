import express from "express";
import cors from "cors";
import todosRouter from "./routes/todoRouter.js";
import connectDB from "./model/database.js";

const app = express();
const port = 3000;

app.use(cors("http://localhost:5173"));

app.use(express.json());

app.use("/todos", todosRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
