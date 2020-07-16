import React from 'react';
import ListItem from './ListItem';

function List(props){
  return (
    <div className='task-list'>
      <ul>
        {props.todolist.map((task, index) => (
          <div key={index}>
            <ListItem todoitem={task} 
              doneButtonClick={props.doneButtonClick} />
          </div>
        ))}
      </ul>
    </div>
  )
};

export default List;