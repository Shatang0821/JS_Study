import { TodoModel } from "./todoModel.js";
import { TodoView } from "./todoView.js";
import { TodoController } from "./todoController.js";

const app = new TodoController(
  new TodoModel(),
  new TodoView()
);
