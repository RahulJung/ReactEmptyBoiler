import React from 'react';
import InputBar from './components/InputBar';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todolist: ['learn promises', 'make todolist', 'work out'],
      input: ''
    };
    
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.doneButtonClick = this.doneButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ 
      input: event.target.value
    });
  }

  onSubmit() {
    let newList = this.state.todolist.push(this.state.input);
    this.setState({
      todoList: newList,
      input: ''
    });
  }

  doneButtonClick(event) {
    let newTaskList = this.state.todolist.filter((item) => {
      return item !== event.target.value
    })
    this.setState({
      todolist: newTaskList
    })
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <InputBar
          value={this.state.input}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <List
          todolist={this.state.todolist}
          doneButtonClick={this.doneButtonClick}
        />
      </div>
    )
  }
}

export default App;
