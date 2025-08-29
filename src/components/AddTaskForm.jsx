import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <Button className="cursor-pointer" variant="default" type="submit">
        Add
      </Button>
    </form>
  );
}
