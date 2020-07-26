import React from 'react';
import InputBar from './components/InputBar';
import List from './components/List';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
      input: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.getToDos = this.getToDos.bind(this);
  }

  componentDidMount() {
    //get data on initial render
    this.getToDos()
  }

  getToDos() {
    axios.get('/api/tasks')
    .then((res) => {
      console.log('axios GET request: ', res);
      this.setState({
        todolist: res.data
      });
    })
    .catch((err) => console.log('problem with axios GET request: ', err));
  }

  addTask() {
    // send new task from input bar to server in the form of an object
    axios.post('/api/tasks', {
      task: this.state.input
    })
    .then((res) => {
      console.log('from axios POST request: ', res);
      this.setState({
        input: ''
      });
    })
    // re-render all tasks to the screen
    .then(() => this.getToDos())
    .catch((err) => console.log('problem with axios POST request: ', err));
  }
  
  deleteTask(id) {
    console.log(`deleting task with id: ${id}`);
    axios.delete(`/api/tasks/${id}`)
    .then(() => this.getToDos())
    .catch((err) => console.log('problem with axios DELETE request: ', err));
  }
  
  onInputChange(event) {
    const {value} = event.target;
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <InputBar
          value={this.state.input}
          onInputChange={this.onInputChange}
          addTask={this.addTask}
        />
        <List
          todolist={this.state.todolist}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
