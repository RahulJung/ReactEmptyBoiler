import React from 'react';

// hitting ENTER sends value
function InputBar({addTask, value, onInputChange}) {
  return (
    <form>
      <div className="input-bar">
        <input onChange={onInputChange} value={value}></input>
        <button onClick={addTask}>Add</button>
      </div>
    </form>
  )
};

export default InputBar;

