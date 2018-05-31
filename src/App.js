import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

class TodoItem extends Component {
render() {
const isCompleted = this.props.TodoCompleted;
const renderComplete = isCompleted ? (
  <input className="toggle" type="checkbox" checked></input> //if completed or true, then its checked.
) : (
  <input className="toggle" type="checkbox"></input> //if not complete, or false, then its not checked.
)

  return(
<li className={isCompleted ? 'completed' : ''}>
    <div className="view">
      {renderComplete}
      <label>{this.props.TodoItem}</label>
      <button className="destroy"></button>
    </div>
</li>
    )
  }
}

class TodoList extends Component {
constructor(props) {
  super(props)
  this.state = {
    todos: todoList
  }
}

render() {
  return(
  <React.Fragment>
    <section className="main">
      <ul className="todo-list">
        {this.state.todos.map( todo => <TodoItem TodoItem={todo.title} TodoCompleted={todo.completed} />)}
      </ul>
    </section>
  </React.Fragment>
  )
}
}



class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>To Do</h1>
            <TodoList />
        </header>
      </section>
    );
  }
}

export default App;
