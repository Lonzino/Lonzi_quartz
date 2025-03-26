import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { KanbanBoard as KanbanBoardType } from '../types/kanban';

interface KanbanBoardProps {
  data: KanbanBoardType;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ data }) => {
  const [board, setBoard] = useState(data);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const newBoard = { ...board };
    
    // Update task position
    const [movedTask] = newBoard.columns[source.droppableId].tasks.splice(source.index, 1);
    newBoard.columns[destination.droppableId].tasks.splice(destination.index, 0, movedTask);
    
    setBoard(newBoard);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {board.columns.map(column => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-column"
              >
                <h3>{column.title}</h3>
                {column.tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="kanban-task"
                      >
                        <h4>{task.title}</h4>
                        {task.description && <p>{task.description}</p>}
                        {task.dueDate && <span>Due: {task.dueDate}</span>}
                        <div className="task-tags">
                          {task.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}; 