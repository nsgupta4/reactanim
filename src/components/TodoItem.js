import React from 'react'
import './TodoItem.css';
import { CSSTransition } from 'react-transition-group';
class TodoItem extends React.Component {
 render() {
  return (
      <CSSTransition 
        in={true}
        classNames="fade" 
        timeout={500}>
          <div className="item">
            {this.props.todo}
            <button onClick={this.props.handleDelete}>delete</button>
        </div>
      </CSSTransition>
        
   );
 }
}
export default TodoItem;