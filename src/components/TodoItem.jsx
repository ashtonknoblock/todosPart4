import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export  class TodoItem extends React.Component {

    render() {
      const isCompleted = this.props.TodoCompleted;
      const renderComplete = isCompleted ? (
        <input id={this.props.id - 1} className="toggle" type="checkbox" onClick={(event) => this.props.onClick(event)} defaultChecked></input> //if completed or true, then its checked.
      ) : (
          <input id={this.props.id - 1} className="toggle" type="checkbox" onClick={(event) => this.props.onClick(event)} ></input> //if not complete, or false, then its not checked.
        )
  
  
      return (
        <li className={isCompleted ? 'completed' : ''}>
          <div className="view">
            {renderComplete}
            <label>{this.props.TodoItem}</label>
            <button className="destroy" id={this.props.id - 1} onClick={(event) => this.props.destroyOnClick(event)}></button>
          </div>
        </li>
      )
    }
  }