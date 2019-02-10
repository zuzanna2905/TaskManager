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
    // fetch('http://localhost:3001/newtask', {
    //     method: 'post',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({
    //         userid: this.props.userid
    //         task: this.state.input
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
              <input id="task" className="ma2 input-reset ba bg-light-silver b--black-20 br4 pa2 db w-100" placeholder='Task...' type="text" aria-describedby="task-desc"/>
              <button className="white bg-mid-gray br4 mh2 mv1 f5 ph2">Add</button>
          </div>
      </div>
    )
  }
}

export default TaskInput
