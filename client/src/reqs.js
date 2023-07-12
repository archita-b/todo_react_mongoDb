const url = "http://localhost:5000";

export async function fetchTodos() {
  const res = await fetch(url + "/todos");
  const data = await res.json();
  return data;
}

export async function createTodo(todo) {
  const res = await fetch(url + "/todos", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data;
}

export async function updateTodo(todo) {
  const res = await fetch(url + "/todos", {
    method: "PUT",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data;
}

export async function checkedTodo(todo) {
  const res = await fetch(url + "/todos/checked", {
    method: "PUT",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data;
}

export async function deleteTodoItem(id) {
  const res = await fetch(url + "/todos/" + id, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}
