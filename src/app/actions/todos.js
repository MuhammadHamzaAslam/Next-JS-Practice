"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(formData) {
  let todoText = formData.get("todo");
  try {
    let fetchingTodo = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ todoText }),
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
  // console.log('todos' , Todos)
}
