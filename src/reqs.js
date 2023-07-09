const url = "http://localhost:5000";

async function fetchTodos() {
  const res = await fetch(url + "/todos");
  const data = await res.json();
  return data;
}

async function createTodo(todo) {
  await fetch(url + "/todos", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(todo),
  });
}

async function updateTodo(todo) {
  await fetch();
}
