import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css';
import{ TransitionGroup, CSSTransition }  from 'react-transition-group';

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
          
          
           {listItems}
          
        
        </div>
      </div>
    )
  }
}


export default TodoList