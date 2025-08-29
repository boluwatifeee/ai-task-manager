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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          AI Task Manager 🚀
        </h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
