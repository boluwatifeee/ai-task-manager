import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "First task",
      description: "Setup project",
      status: "todo",
    },
    {
      id: "2",
      title: "Second task",
      description: "Add Tailwind",
      status: "done",
    },
  ]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        AI Task Manager 🚀 {message}
      </h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
