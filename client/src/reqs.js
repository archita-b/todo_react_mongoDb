const url = "http://localhost:5000";

export async function fetchTodos() {
  const res = await fetch(url + "/todos");
  const data = await res.json();
  return data;
}

export async function createTodo(todo) {
  // console.log("todo=", todo);
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
  // console.log("todo in put=", todo);
  const res = await fetch(url + "/todos", {
    method: "PUT",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  // console.log("data=", data);
  return data;
}

export async function deleteTodoItem(id) {
  // console.log("path=", url + "/todos/" + id);
  const res = await fetch(url + "/todos/" + id, {
    method: "DELETE",
  });
  const data = await res.json();
  // console.log("data=", data);
  return data;
}
