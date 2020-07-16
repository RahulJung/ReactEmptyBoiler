import React from 'react';

// adding form tags allows for sending value by hitting ENTER
function InputBar(props) {
  return (
    <div className="input-bar">
      <input
        onChange={props.onInputChange}
        value={props.value} >
      </input>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  )
};

export default InputBar;