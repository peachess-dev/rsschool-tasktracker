// Define the task interface
export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  boardId?: number; //do I need it here?
}

// Define the list interface
export interface List {
  id: number;
  name: string;
  boardId: number;
  tasks: Task[];
}

// Define the board interface
export interface Board {
  id: number;
  name: string;
  lists: List[];
}
