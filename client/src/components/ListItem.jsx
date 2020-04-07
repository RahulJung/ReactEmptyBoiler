import React from 'react';

function ListItem(props){
  return ( 
    <div>
      <span>{props.todoitem}</span>
      <button onClick={props.doneButtonClick}>Done</button>
    </div>
  )
}

export default ListItem;