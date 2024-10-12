const Todos = [
  {
    todoText: "Task 1",
    id: 1,
  },
  {
    todoText: "Task 2",
    id: 2,
  },
  {
    todoText: "Task 3",
    id: 3,
  },
  {
    todoText: "Task 4",
    id: 4,
  },
  {
    todoText: "Task 5",
    id: 5,
  },
  {
    todoText: "Task 6",
    id: 6,
  },
];

export async function GET() {
  return Response.json(Todos);
}
export async function POST(request) {
  let newTodo = await request.json();
  let obj = {
    ...newTodo,
    id: Todos.length + 1,
  };
  Todos.push(obj)
  return Response.json(Todos);
}
