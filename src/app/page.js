import Image from "next/image";
import "./globals.css";
import { addTodo } from "./actions/todos";
import Navbar from '@/components/Navbar';
export default async function Home() {
  let todosApi = await fetch("http://localhost:3000/api/todos");
  todosApi = await todosApi.json();
  return (
    <div>
      <Navbar/>
      <h1 className="text-center text-3xl">Hamza</h1>
      <form action={addTodo} className="flex justify-center items-center my-4 gap-2">
        <input type="text" placeholder="Enter Your Todo" className="border border-black px-2 py-3 w-1/4" name="todo" />
        <input type="submit" value={'Add Todo'} className="px-3 py-3 bg-purple-400 rounded-xl" />
      </form>
      <div className="flex justify-center flex-col items-center gap-3">
        {todosApi.map((data) => (
          <div
            className="flex justify-center items-center p-3 border border-black w-1/3 "
            key={data.id}
          >
            {data.todoText}
          </div>
        ))}
      </div>
    </div>
  );
}
