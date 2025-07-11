export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, newStatus: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value)}
      >
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};
