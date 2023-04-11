import { nanoid } from 'nanoid';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [{'id': 1, "text": "Walk the fish"}, {"id": 2, "text": "Watch a movie"}],
      text: ""
    };

  }

  // Needed to move outside of constructor
  handleClick = () => {
    console.log("Clicked", this)

   

    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  handleChange = (event) => {

    this.setState({
      //event is typing. Target is the value of what is typed
      text: event.target.value
    });
  }

  handleSubmit = () => {
    this.setState({

      // ... is a spread
      // If you do this.state.id, you get id is undefined in console. Line 48
      // Nanoid only gives id to new todos added. Very unique, it's not 3, 4, 5, etc.
      todos: [...this.state.todos, { id: nanoid(), text: this.state.text}],
      // The empty string clears the input field after submitting a todo
      text: ""
    })

  }

  handleDelete = (id) => {
    console.log("Id is: ",id)

  // Find the id by its index. Find the todo id where it's equal to the id passed in.
  const index = this.state.todos.findIndex(todo => todo.id === id)
  console.log("index ",index)

  const copy = [...this.state.todos]

  copy.splice(index, 1)

  this.setState({
    todos: copy
  })
    
  }

  render() {
    return (
      <div className="App">
       {/* <h1>{this.state.isClicked === true ? "Clicked" : "Not Clicked"}</h1>
       <button onClick={this.handleClick}>Click Me</button> */}

       <input type="text" onChange={this.handleChange} value={this.state.text}/>
       <button onClick={this.handleSubmit}>Add Todo</button>

       <ul>
          {this.state.todos.map( (todo) => {
            return <li className="todo-item" key={todo.id}>
              <h4>{todo.text}</h4>
            <button onClick={() => this.handleDelete(todo.id)}>X</button>
            </li>
        })
        
        }
       </ul>

      
      </div>
    );

  }
  
}

export default App;
