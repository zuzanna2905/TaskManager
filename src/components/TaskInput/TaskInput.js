import React from 'react';
import queryString from 'query-string';

class TaskInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  onTaskChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmitTask = () => {
    if(this.state.input){
      fetch('http://localhost:3001/tasks?' + queryString.stringify({
          userid: this.props.userid, 
          task: this.state.input
        }), {
          method: 'post',
          headers: {'Content-Type' : 'application/json'}
      })
      .then(response => { 
        response.json();
        this.setState({input: ''});
        this.props.loadData();
        })
    }
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmitTask();
    }
  }

  render(){
    return (
      <div>
          <div className="flex center w-80">
              <input 
                id="task" 
                onChange={this.onTaskChange} 
                onKeyPress={this.onKeyPress}
                value={this.state.input}
                className="ma2 bg-white-60 input-reset ba b--black-20 br4 pa2 db w-80" 
                placeholder='Task...' 
                type="text" 
                aria-describedby="task-desc"
              />
              <button 
                onClick={() => this.onSubmitTask()}
                className="black br4 bg-white-40 mh2 mv1 f5 ph2 w-20"
              > Add </button>
          </div>
      </div>
    )
  }
}

export default TaskInput
