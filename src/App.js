import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Box from './components/Box';
import  { TransitionGroup, CSSTransition } from 'react-transition-group';
class App extends Component {
  state = {
    todos: [
      {task: "Wash Dishes"},
      {task: "Walk Dog"},
      {task: "Brush Teeth"}
    ],
    inputText: "",
    boxShowing: false
  }
  handleSubmit = (event) => {
    event.preventDefault()

    const newTask = { task: this.state.inputText}
    this.setState({
      todos: [...this.state.todos, newTask],
      inputText: "",
      ...this.state.boxShowing
    })
  }

  handleDelete = (i) => {
    let newTasks = this.state.todos.slice()
    newTasks.splice(i, 1)
    this.setState({todos: newTasks})
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value})
  }

  handleBox = (event) => {
    this.setState({boxShowing: !this.state.boxShowing})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputText}/>
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleBox}>Toggle Box</button>
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
        <CSSTransition
          classNames="fade"
          timeout={3000}>
          <Box isShowing={this.state.boxShowing}/>
          </CSSTransition>
        
      </div>
    );
  }
}

export default App;
