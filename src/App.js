import React, { Component } from 'react';
import queryString from 'query-string';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import UserInfo from './components/UserInfo/UserInfo';
import Tasks from './components/Tasks/Tasks';
import Welcome from './components/Welcome/Welcome';
import TaskInput from './components/TaskInput/TaskInput';
import './App.css';
const url = 'http://localhost:3001/tasks';

class App extends Component {
  constructor(){
    super();
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initial = 
    {
      route: 'welcome',
      isSignedIn: false,
      areTasks: false,
      user: {
        id: '',
        name: ''
      },
      tasks: []
    }
    return initial;
  } 

  reset = () => {
    this.setState(this.getInitialState());
  }

  loadData = () => {
    fetch(url + '?' + queryString.stringify({userid: this.state.user.id}), {
        method: 'get',
        headers: {'Content-Type' : 'application/json'}
    })
    .then(response => response.json())
    .then(tasks=> this.updateData(tasks))
  }

  updateData = (tasks) => {
    if(tasks[0]){
      this.setState({ tasks:tasks, areTasks: true })
    } else {
      this.setState({ tasks:[], areTasks: false })
    }
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
    this.setState({ route: route});
    if( route === 'signout'){
      this.setState(this.reset())
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
  }

  render() {
    const {isSignedIn, route, user, tasks, areTasks} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange}/>  
        { route === 'home' ? 
        <div>
          <UserInfo name={user.name} areTasks={areTasks}/>
          <TaskInput loadData={this.loadData} userid={user.id}/>
          <Tasks tasks={tasks} userid={user.id} loadData={this.loadData}></Tasks>
        </div>
        : (
          route === 'welcome' ?
          <Welcome onRouteChange = {this.onRouteChange}/>
          : (
            route === 'signin' ?
            <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
           : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
          )
        )}
      </div>
    );
  }
}

export default App;