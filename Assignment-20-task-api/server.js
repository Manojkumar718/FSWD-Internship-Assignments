const express = require("express");
const app = express();

app.use(express.json());

// Dummy data
let tasks = [
  { id: 1, title: "Learn Node" },
  { id: 2, title: "Build API" }
];


// ----------- GET all tasks -----------
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


// ----------- POST new task -----------
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);
  res.json(newTask);
});


// ----------- PUT update task -----------
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.send("Task not found");
  }

  task.title = req.body.title;
  res.json(task);
});


// ----------- DELETE task -----------
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(t => t.id !== id);

  res.send("Task deleted");
});


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});