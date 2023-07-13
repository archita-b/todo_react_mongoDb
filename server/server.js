import express from "express";
import cors from "cors";
import todosRouter from "./routes/todoRouter.js";
import connectDB from "./model/database.js";

const app = express();
const port = 5000;

app.use(cors("http://localhost:5173"));
app.use(express.json());

app.use("/todos", todosRouter);

connectDB().catch((error) => {
  console.error("Error connecting to database");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
