import { Button } from "./ui/button";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-3 rounded-lg border bg-gray-50 hover:bg-gray-100 transition gap-x-4">
      <span className="text-gray-800">{task.title}</span>
      <Button
        className="cursor-pointer"
        variant="destructive"
        size="sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </li>
  );
};

export default TaskItem;
