import React from 'react';

function ListItem({todoitem, deleteTask, id}) {

  const deleteTaskHandler = () => {
    deleteTask(id)
  };
  
  return ( 
    <div className="task" key={id}>
      <span>{todoitem} </span>
      <button onClick={deleteTaskHandler}>Delete</button>
    </div>
  )
};

export default ListItem;
