import React from 'react';
import queryString from 'query-string';

class TaskInput extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmitTask = () => {
  let addUrl = 'http://localhost:3001/tasks' + '?' + queryString.stringify({userid: this.props.userid, task: this.state.input, priority: 1, category: 2})
    fetch(addUrl, {
        method: 'post',
        headers: {'Content-Type' : 'application/json'}
    })
    .then(response => response.json())
    .then(task => {
        if(task[0]){
          this.props.loadData();
        }
    })
  }

  render(){
    return (
      <div>
          <div className="measure flex center w-90">
              <input id="task" onChange={this.onInputChange} className="ma2 bg-white-60 input-reset ba b--black-20 br4 pa2 db w-100" placeholder='Task...' type="text" aria-describedby="task-desc"/>
              <button onClick={() => this.onSubmitTask()} className="black br4 bg-white-70 mh2 mv1 f5 ph2 w-20">Add</button>
          </div>
      </div>
    )
  }
}

export default TaskInput
