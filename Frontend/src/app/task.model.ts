export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface Project {
  id?: number | null;
  name: string;
  description: string;
  tasks: Task[];
  important: boolean;
  createdAt: string;
}
