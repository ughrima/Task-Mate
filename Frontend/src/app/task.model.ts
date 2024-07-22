export interface Project {
  id?: number | null;
  name: string;
  description: string;
  tasks: Task[];
}

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}
