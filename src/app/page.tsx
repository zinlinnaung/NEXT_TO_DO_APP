import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="w-screen  mt-4 flex justify-center">
      <div className="text-center w-[50%] my-5 flex flex-col gap-4  ">
        <h1 className="text-2xl font-bold text-black">Todo List App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
