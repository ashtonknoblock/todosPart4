import React, { Component } from 'react';
import { TodoItem } from './TodoItem.jsx';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



export class TodoList extends React.Component {

    render() {
      return (
        <React.Fragment>
          <section className="main" >
            <ul className="todo-list">
              {this.props.todos.map(todo => <TodoItem
                onClick={(event) => this.props.onClick(event)}
                destroyOnClick={(event) => this.props.destroyOnClick(event)}
                TodoItem={todo.title}
                TodoCompleted={todo.completed}
                key={todo.id}
                id={todo.id} />)}
            </ul>
          </section>
        </React.Fragment>
      )
    }
  }