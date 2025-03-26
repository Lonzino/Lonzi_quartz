export interface KanbanTask {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  description?: string;
  dueDate?: string;
  tags: string[];
  assignee?: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

export interface KanbanBoard {
  columns: KanbanColumn[];
  metadata: {
    lastUpdated: string;
    totalTasks: number;
  };
} 