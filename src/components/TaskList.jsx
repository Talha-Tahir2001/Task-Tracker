import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
