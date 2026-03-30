let tasks = require("../models/taskModel");

// GET
function getTasks(req, res) {
  res.json(tasks);
}

// POST
function createTask(req, res) {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);
  res.json(newTask);
}

// PUT
function updateTask(req, res) {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.send("Task not found");
  }

  task.title = req.body.title;
  res.json(task);
}

// DELETE
function deleteTask(req, res) {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(t => t.id !== id);

  res.send("Task deleted");
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};