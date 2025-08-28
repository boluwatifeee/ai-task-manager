import api from "./axios";
import type { Task } from "../types";

export const getTasks = async () => {
  const res = await api.get<Task[]>("/tasks");
  return res.data;
};

export const createTask = async (task: Task) => {
  const res = await api.post<Task>("/task", task);
  return res.data;
};

export const updateTask = async (id: string, updates: Partial<Task>) => {
  const res = await api.put<Task>(`/tasks/${id}`, updates);
  return res.data;
};

export const deleteTask = async (id: string) => {
  await api.delete(`/tasks/${id}`);
};
