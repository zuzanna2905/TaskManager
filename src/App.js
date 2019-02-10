import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import UserInfo from './components/UserInfo/UserInfo';
import Tasks from './components/Tasks/Tasks';
import TaskInput from './components/TaskInput/TaskInput';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      areTasks: true,
      user: {
        id: '',
        name: ''
      },
      tasks:  [{
        id: 1,
        name: 'make a dinner'
      },
      {
        id: 2,
        name: 'take out the trash'
      },
      {
        id: 3,
        name: 'wash the dishes'
      }]
    }
  }

  loadData = () => {
    // fetch('http://localhost:3001/tasks', {
    //     method: 'post',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({
    //         id: this.state.user.id
    //     })
    // })
    // .then(response => response.json())
    // .then(tasks => {
    //     if(tasks){
    //       this.setState({ tasks:tasks })
    //     }
    // })
  }

  loadUser = (user) => {
    this.setState({user : {
      id: user.id,
      name: user.name
    }})
    if(this.state.user){
      this.loadData();
    }
  }

  onRouteChange = (route) => {
    if( route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route});
  }

  render() {
    const {isSignedIn, route, user, tasks, areTasks,} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange}/>  
        { route === 'home' ? 
        <div>
          <UserInfo name={user.name} areTasks={areTasks}/>
          <TaskInput loadData={this.loadData} userid={user.id}/>
          <Tasks tasks={tasks}></Tasks>
        </div>
        : (
          route === 'signin' ?
          <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
          : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
        )}
      </div>
    );
  }
}

export default App;