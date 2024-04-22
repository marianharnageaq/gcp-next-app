"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  name: string;
};

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!!input.length) {
      console.log(input);
    }
  };

  const deleteTodo = (id: any) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    // Add call to DB to delete todo
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos/get");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="w-full max-w-[500px] ">
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-md text-black px-3"
          type="text"
        />
        <button
          onClick={addTodo}
          className="bg-white rounded-md text-black px-4 py-1 "
        >
          Add Todo
        </button>
      </div>
      <ul className="flex flex-col gap-3 py-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex-1 flex justify-between items-center bg-white/30 p-2"
          >
            <span>{todo.name}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-700/90 p-1 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
