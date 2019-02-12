import React from 'react'

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
    // fetch('http://localhost:3001/tasks/:id', {
    //     method: 'post',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({
    //         userid: this.props.userid
    //         task: this.state.input,
    //     })
    // })
    // .then(response => response.json())
    // .then(task => {
    //     if(task.id){
    //       this.props.loadData();
    //     }
    // })
}

  render(){
    return (
      <div>
          <div className="measure flex center">
              <input id="task" className="ma2 bg-white-60 input-reset ba b--black-20 br4 pa2 db w-100" placeholder='Task...' type="text" aria-describedby="task-desc"/>
              <button onClick={this.onSubmitTask} className="black br4 bg-white-70 mh2 mv1 f5 ph2">Add</button>
          </div>
      </div>
    )
  }
}

export default TaskInput
