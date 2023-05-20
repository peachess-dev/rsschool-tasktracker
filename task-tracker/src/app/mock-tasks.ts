import { Task } from './Task';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Do this thing',
    dueDate: new Date('2023-04-04'),
    completed: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Do that thing',
    dueDate: new Date('2023-04-05'),
    completed: false,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Do this other thing',
    dueDate: new Date('2023-04-06'),
    completed: false,
  },
];
