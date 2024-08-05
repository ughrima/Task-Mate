export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  project?: Project; // Ensure the project property is included
}

export interface Project {
  id?: number;
  name: string;
  description: string;
  important: boolean;
  createdAt: string;
  tasks: Task[];
}
