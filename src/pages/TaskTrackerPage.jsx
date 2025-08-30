import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskTrackerPage() {
  const [editingTask, setEditingTask] = useState(null);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addorUpdateTask = (title) => {
    if (editingTask) {      
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, title } : task
        )
      );
      setEditingTask(null);
    } else {      
      const newTask = { id: Date.now(), title };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    if (editingTask && editingTask.id === id) {
      setEditingTask(null);
    }
  };

  return (
    <div className="flex justify-center items-start p-6">
      <Card className="w-full max-w-md shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold text-muted-foreground">
            Task Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AddTaskForm onAdd={addorUpdateTask} editingTask={editingTask} />
          <div className="mt-4">
            <TaskList
              tasks={tasks}
              onDelete={deleteTask}
              onEdit={setEditingTask}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
