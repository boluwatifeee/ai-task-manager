import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import { Task, TaskStatus } from "./types";
import { createTask, deleteTask, getTasks } from "./api/tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    const task = await createTask({
      title: newTask,
      status: TaskStatus.TODO,
      description: "",
      id: "",
    });
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        AI Task Manager 🚀
      </h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
