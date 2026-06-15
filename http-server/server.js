// start creating server here
import express from "express";

const app = express();

app.use(express.json({ type: "*/*" }));

let todos = [];
let cnt = 1;

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create Todo
app.post("/create/todo", (req, res) => {
  const { title, description } = req.body;

  todos.push({
    id: cnt++,
    title,
    description,
  });

  res.status(200).json(todos);
});

// Get all Todos
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

// Get Todo by ID
app.get("/todo", (req, res) => {
  const id = parseInt(req.query.id);

  const todo = todos.find(item => item.id === id);

  if (!todo) {
    return res.status(404).json({
      error: "Todo not found",
    });
  }
  res.status(200).json(todo);
});

// Delete Todo by ID
app.delete("/todo", (req, res) => {
  const id = parseInt(req.query.id);

  const todo = todos.find(item => item.id === id);

  if (!todo) {
    return res.status(404).json({
      error: "Todo not found",
    });
  }

  todos = todos.filter(item => item.id !== id);

  res.status(200).json({
    message: "deleted",
  });
});

// Handle invalid routes

// if no earlier path run then run me 
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.listen(8080, () => {
  console.log("Server running on port 3000");
});