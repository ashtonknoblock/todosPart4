import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: todoList,
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked = (event) => {
    const copy2 = this.state.todos.slice();
    const thingToChange = copy2[event.target.id] 
    thingToChange.completed ? thingToChange.completed = false : thingToChange.completed = true;
    this.setState({todos: copy2})
    }

    destroyOnClick = (event) => {
      const copy3 = this.state.todos.slice();
      const thingToDelete = event.target.id
      copy3.splice(thingToDelete, 1)
      console.log(copy3)
      this.setState({todos: copy3})
    }

  handleChange = (event) => {
    console.log(this.state)
  }

  handleKeyPress = (event) => {
    const copy = this.state.todos.slice();
    const nextid = Number(copy[copy.length-1].id);

    const addedToDo = {
      "userId": 1,
      "id": nextid+1,
      "title": `${event.target.value}`,
      "completed": false
    };
    copy.push(addedToDo);
    if (event.key === "Enter") {
      this.setState({todos: copy})
      event.preventDefault();
      document.getElementById('text').value = "";
    }
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>To Do</h1>
            <input type="text" id="text" className="new-todo" placeholder="What needs to be done?" 
            onKeyPress={this.handleKeyPress} onChange={this.handleChange} autoFocus></input>
            <TodoList todos={this.state.todos} onClick={(event) => this.handleChecked(event)} 
            destroyOnClick={ (event) => this.destroyOnClick(event)}/>
        </header>
      </section>
    );
  }
}


class TodoItem extends Component {
  

render() {
const isCompleted = this.props.TodoCompleted;
const renderComplete = isCompleted ? (
  <input id={this.props.id-1} className="toggle" type="checkbox" onClick={(event) => this.props.onClick(event)} defaultChecked></input> //if completed or true, then its checked.
) : (
  <input id={this.props.id-1} className="toggle" type="checkbox" onClick={(event) => this.props.onClick(event)} ></input> //if not complete, or false, then its not checked.
)


  return(
<li className={isCompleted ? 'completed' : ''}>
    <div className="view">
      {renderComplete} 
      <label>{this.props.TodoItem}</label>
      <button className="destroy" id={this.props.id-1} onClick={(event) => this.props.destroyOnClick(event)}></button>
    </div>
</li>
    )
  }
}

class TodoList extends Component {

render() {
  return(
  <React.Fragment>
    <section className="main" >
      <ul className="todo-list">
        {this.props.todos.map( todo => <TodoItem 
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



export default App;
