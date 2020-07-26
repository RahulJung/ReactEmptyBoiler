import React from 'react';
import ListItem from './ListItem';

function List({todolist, deleteTask}) {
  
  return (
    <div className='task-list'>
      <ul>
        {todolist.map((action, index) => (
          <div key={index}>
            <ListItem id={action.id} todoitem={action.task} deleteTask={deleteTask} />
          </div>
        ))}
      </ul>
    </div>
  )
};

export default List;
