import express from "express";
import {
  deleteTodo,
  getTodo,
  getTodos,
  postTodo,
  updateTodo,
} from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.post("/create", postTodo);
todoRouter.delete("/delete/:id", deleteTodo);
todoRouter.get("/:id", getTodo);
todoRouter.put("/edit/:id", updateTodo);

export default todoRouter;
