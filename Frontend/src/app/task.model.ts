export interface Task {
  id?: number;
  title: string;
  completed: boolean;
  project?: Project; 
}


export interface Project {
  id?: number;
  name: string;
  description: string;
  important: boolean;
  createdAt: string;
  tasks: Task[];
  completed?: boolean; 
  headerColor?: string; 
}

