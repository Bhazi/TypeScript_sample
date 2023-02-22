"use strict";
exports.__esModule = true;
var express_1 = require("express");
var todos = [];
var router = (0, express_1.Router)();
router.get("/", function (req, res, next) {
    res.status(200).json({ todo: todos });
});
router.post("/todo", function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.sendStatus(201);
});
router.put("/todo/:Id", function (req, res, next) {
    todos.filter(function (check) {
        if (check.id == req.params.Id) {
            check.text = req.body.text;
        }
        return res.status(200).json({ todos: check });
    });
});
router["delete"]("/todo/:Id", function (req, res, next) {
    var modifiedArray = todos.filter(function (check) {
        if (check.id !== req.params.Id) {
            return check;
        }
    });
    if (todos.length == modifiedArray.length)
        return res.status(404).json();
    todos = modifiedArray;
    res.status(202).json({ todos: modifiedArray });
});
exports["default"] = router;
