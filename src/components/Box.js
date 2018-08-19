import React from 'react'
import './Box.css';

class Box extends React.Component {
  componentWillAppear(callback){
    console.log('here');
  }
 render() {
  return (
    
    <div>{this.props.isShowing ? <div className="box"></div> : null}</div>
  
   )
 }
}
export default Box;