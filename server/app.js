const express = require("express");
const cors = require("cors");

const db = require("./models/database");

const app = express();

const allowedOrigins = ["http://localhost:5173"];
app.use(cors({ origin: allowedOrigins }));
app.use(express.static("public"));
app.use(express.json());

app.get("/todos", (req, res) => {
  db.query("SELECT * FROM todos_table ORDER BY id asc", (err, result) => {
    if (!err) {
      // console.log("res in get=", result.rows);
      res.status(200).json(result.rows);
    } else {
      console.error("Error retrieving todos", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

app.post("/todos", (req, res) => {
  // console.log("req in post=", req.body);
  const { item, priority, notes, duedate, completed } = req.body;

  db.query(
    "INSERT INTO todos_table(item,priority,notes,duedate,completed) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [item, priority, notes, duedate, completed],
    (err, result) => {
      if (!err) {
        res.status(201).json(result.rows[0]);
      } else {
        console.error("Error creating todo", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  );
});

app.put("/todos", (req, res) => {
  // console.log("req in put=", req.body);
  const { id, notes, priority, duedate } = req.body;

  db.query(
    "UPDATE todos_table SET priority=$2, notes=$3, duedate=$4 WHERE id=$1 RETURNING *",
    [id, priority, notes, duedate],
    (err, result) => {
      if (!err) {
        res.status(200).json(result.rows[0]);
      } else {
        console.error("Error updating todo data", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  );
});

app.put("/todos/checked", (req, res) => {
  const { id, completed } = req.body;

  db.query(
    "UPDATE todos_table SET completed=$2 WHERE id = $1 RETURNING *",
    [id, completed],
    (err, result) => {
      if (!err) {
        res.status(200).send(result.rows[0]);
      } else {
        console.error("Error updating checking todo-item", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  );
});

app.delete("/todos/:id", (req, res) => {
  // console.log("hi");
  const todoId = req.params.id;
  // console.log("id=", todoId);

  db.query("DELETE FROM todos_table WHERE id = $1", [todoId], (err, result) => {
    // console.log("result row=", result.rowCount);
    if (!err) {
      res.json({ message: "Todo item deleted" });
    } else {
      console.error("Error deleting todo", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

app.listen(5000, () => {
  console.log("Express listening at port 5000");
});
