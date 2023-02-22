import { Router } from "express";

import { Todo } from "../models/todo";

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todo: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
  res.sendStatus(201);
});

router.put("/todo/:Id", (req, res, next) => {
  todos.filter((check) => {
    if (check.id == req.params.Id) {
      check.text = req.body.text;
    }
    return res.status(200).json({ todos: check });
  });
});

router.delete("/todo/:Id", (req, res, next) => {
  const modifiedArray = todos.filter((check) => {
    if (check.id !== req.params.Id) {
      return check
    }
  });

  if(todos.length == modifiedArray.length) return res.status(404).json()
  todos = modifiedArray;
  res.status(202).json({ todos: modifiedArray });
});

export default router;
