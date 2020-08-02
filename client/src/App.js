import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todolist : [],
      input: ''
    }
    this.getTodos = this.getTodos.bind(this);
  }

  getTodos() {
    axios.get('/tasks')
    .then( (res) => {
      this.setState({
        todolist: res.data
      })
    })
    .catch( (err) => console.log("Error from getTodos"))
  }

  render() {
    return (
    <div>Welcome to Todolist App</div>
    )
  }
}
export default App;