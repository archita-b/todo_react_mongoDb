import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "../controller/todos";

const router = express.Router();

router.route("/").get(getTodos).post(createTodo).put(updateTodo);

router.route("/checked").put(toggleTodo);

router.route("/:id").delete(deleteTodo);

export default router;
