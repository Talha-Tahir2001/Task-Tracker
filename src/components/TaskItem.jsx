import { Button } from "./ui/button";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <li className="flex justify-between items-center p-3 rounded-lg border bg-gray-50 hover:bg-gray-100 transition gap-x-2">
      <span className="text-gray-800 truncate max-w-[200px]">
        {task.title}
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(task)}
          className="cursor-pointer"
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(task.id)}
          className="cursor-pointer"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
