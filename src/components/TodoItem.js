import React from 'react'
import './TodoItem.css';
class TodoItem extends React.Component {
 render() {
  return (
        <div className="item">
            {this.props.todo}
            <button onClick={this.props.handleDelete}>delete</button>
        </div>
   );
 }
}
export default TodoItem;