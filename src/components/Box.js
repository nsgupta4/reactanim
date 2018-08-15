import React from 'react'
import './Box.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransitionGroup } from 'react-transition-group';
class Box extends React.Component {
 render() {
  return (
   <CSSTransitionGroup
           transitionName="spicy"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>
             {this.props.isShowing ? <div className="box"></div> : null}
      </CSSTransitionGroup> 
   )
 }
}
export default Box;