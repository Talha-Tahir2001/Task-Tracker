import { useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskTrackerPage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
          <AddTaskForm onAdd={addTask} />
          <div className="mt-4">
            <TaskList tasks={tasks} onDelete={deleteTask} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
