import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TodoList extends React.Component {
  render() {
    const listItems = this.props.todos.map((todo, index) => 
    <TodoItem 
        key={index} 
        todo={todo.task} 
        handleDelete={() => this.props.handleDelete(index)}
    />)
    return (
      <div>
        <div>
          <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {listItems}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}


export default TodoList