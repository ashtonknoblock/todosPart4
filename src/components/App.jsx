import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TodoItem } from './TodoItem.jsx'
import { TodoList } from './TodoList.jsx'
import todoList from './todos.json';
import { Link } from 'react-router-dom';
import { router } from 'sw-toolbox';


export class App extends React.Component {
    

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
      this.setState({ todos: copy2 })
    }

    destroyOnClick = (event) => {
      const copy3 = this.state.todos.slice();
      const Myindex = copy3.findIndex(item => item.id == event.target.id) + 1
      console.log(event.target.id)
      console.log(Myindex)
      copy3.splice(Myindex, 1)
      console.log(copy3)
      this.setState({ todos: copy3 })
    }
  
  
    handleChange = (event) => {
      console.log(this.state)
    }
  
  
    deleteCompleted = (event) => {
      const copy4 = this.state.todos.slice();
      const toDeltete = copy4.filter(item => item.completed !== true)
      this.setState({ todos: toDeltete })
    }

    showCompleted = (event) => {
        const copy5 = this.state.todos.slice();
        const toDeltetee = copy5.filter(item => item.completed === true)
        this.setState({ todos: toDeltetee })
      }
  
  
    handleKeyPress = (event) => {
      const copy = this.state.todos.slice();
      const nextid = Number(copy[copy.length - 1].id);
  
      const addedToDo = {
        "userId": 1,
        "id": nextid + 1,
        "title": `${event.target.value}`,
        "completed": false
      };
      copy.push(addedToDo);
      if (event.key === "Enter") {
        this.setState({ todos: copy })
        event.preventDefault();
        document.getElementById('text').value = "";
      }
    }
  
  
    render() {
    const todos=this.state.todos;
    console.log(todos);



      return (
        <section className="todoapp">
          <header className="header">
            <h1>To Do</h1>
            <input type="text" id="text" className="new-todo" placeholder="What needs to be done?"
              onKeyPress={this.handleKeyPress} onChange={this.handleChange} autoFocus></input>
          </header>
            <Switch>

              <Route 
                  exact path="/" 
                  render={props =>  <TodoList {...props} 
                  todos={this.state.todos}
                  onClick={(event) => this.handleChecked(event)}
                  destroyOnClick={(event) => this.destroyOnClick(event)}
                    /> }
              />

              <Route 
                  path="/active" 
                  render={props => <TodoList {...props} todos={todos.filter(item => !item.completed)}/> } 
              />

              <Route 
                  path="/completed" 
                  render={props => <TodoList {...props} todos={todos.filter(item => item.completed)}/> }
              />

            </Switch>
          <footer className="footer">
            <span className="todo-count"><strong>0</strong> item(s) left</span>
            <ul className="filters">
                    <React.Fragment>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/active'>Active</Link>
                        </li>
                        <li>
                        <Link to='/completed'>completed</Link>
                        </li>
                    </React.Fragment>
            </ul>
            <button className="clear-completed" onClick={this.deleteCompleted}>Clear completed</button>
          </footer>
        </section>
      );
    }
  }
  

  export default App

  
  