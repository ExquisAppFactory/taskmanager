import React, { useState } from 'react';

import { Task, TaskCard, TaskCardProps } from '../components/TaskCard';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'todo' },
  ]);
  const handleStatusChange = (id: string, newStatus: string) => {
    const taskSet: Task[] = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(taskSet);
  };
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};
