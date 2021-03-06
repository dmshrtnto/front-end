import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }
  
  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:9000/api/op_list_user', this.state)
    .then(response =>{
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    const {username,password} = this.state
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" name = "username" value={username} onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name = "password" value={password} onChange={this.changeHandler}/>
          </div>
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
