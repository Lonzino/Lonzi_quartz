import { KanbanBoard, KanbanColumn, KanbanTask } from '../types/kanban';

function generateTaskId(): string {
  return Math.random().toString(36).substr(2, 9);
}

function extractTags(line: string): string[] {
  const tagMatch = line.match(/#[\w-]+/g);
  return tagMatch ? tagMatch.map(tag => tag.slice(1)) : [];
}

function extractDescription(line: string): string | undefined {
  const descMatch = line.match(/\[(.*?)\]/);
  return descMatch ? descMatch[1] : undefined;
}

function extractDueDate(line: string): string | undefined {
  const dateMatch = line.match(/due:(\d{4}-\d{2}-\d{2})/);
  return dateMatch ? dateMatch[1] : undefined;
}

export function parseKanbanMarkdown(content: string): KanbanBoard {
  const lines = content.split('\n');
  const columns: KanbanColumn[] = [];
  let currentColumn: KanbanColumn | null = null;

  lines.forEach(line => {
    if (line.startsWith('## ')) {
      if (currentColumn) {
        columns.push(currentColumn);
      }
      currentColumn = {
        id: line.slice(3).toLowerCase().replace(/\s+/g, '-'),
        title: line.slice(3),
        tasks: []
      };
    } else if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      const task: KanbanTask = {
        id: generateTaskId(),
        title: line.slice(6),
        status: currentColumn?.id || 'todo',
        tags: extractTags(line),
        description: extractDescription(line),
        dueDate: extractDueDate(line)
      };
      currentColumn?.tasks.push(task);
    }
  });

  if (currentColumn) {
    columns.push(currentColumn);
  }

  return {
    columns,
    metadata: {
      lastUpdated: new Date().toISOString(),
      totalTasks: columns.reduce((sum, col) => sum + col.tasks.length, 0)
    }
  };
} 