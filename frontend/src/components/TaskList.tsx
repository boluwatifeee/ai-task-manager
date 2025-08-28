import type { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li key={task.id} className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
            {task.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
