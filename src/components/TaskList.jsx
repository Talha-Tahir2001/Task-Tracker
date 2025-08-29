import { Button } from "@/components/ui/button";

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-2 border rounded"
        >
          <span>{task.title}</span>
          <Button className="cursor-pointer"
            variant="destructive"
            size="sm"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
