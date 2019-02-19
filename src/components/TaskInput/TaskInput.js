import React from 'react';
import queryString from 'query-string';

const priorities = [1,2,3,4];


class TaskInput extends React.Component {
  constructor(){
    super();
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initial = {
      input: '',
      category: '1',
      priority: '1'
    }
    return initial;
  } 

  reset = () => {
    this.setState(this.getInitialState());
  }

  onTaskChange = (event) => {
    this.setState({input: event.target.value})
  }

  onPriorityChange = (event) => {
    this.setState({priority: event.target.value})
  }

  onCategoryChange = (event) => {
    this.setState({category: event.target.value})
  }

  onSubmitTask = () => {
    if(this.state.input){
      fetch('http://localhost:3001/tasks?' + queryString.stringify({
          userid: this.props.userid, 
          task: this.state.input, 
          priority: this.state.priority, 
          category: this.state.category
        }), {
          method: 'post',
          headers: {'Content-Type' : 'application/json'}
      })
      .then(response => response.json())
      .then(task => {
          if(task[0]){
            this.props.loadData();
          }
          this.setState(this.reset())
      })
    }
  }

  setSelect = () => {
    return this.props.categories.map(cat =>
      <option key={cat.id} value={cat.id}>{cat.name}</option>
    )
  }

  setPriority = () => {
    return priorities.map(p => 
      <option key={p}>{p}</option>
    )
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmitTask();
    }
  }

  render(){
    return (
      <div>
          <div className="measure flex center w-90">
              <input 
                id="task" 
                onChange={this.onTaskChange} 
                onKeyPress={this.onKeyPress}
                className="ma2 bg-white-60 input-reset ba b--black-20 br4 pa2 db w-100" 
                placeholder='Task...' 
                type="text" 
                aria-describedby="task-desc"
              />
              <select 
                onChange={this.onCategoryChange}
              >
                <this.setSelect />
              </select>
              <select 
                onChange={this.onPriorityChange}
              >
                <this.setPriority />
              </select>
              <button 
                onClick={() => this.onSubmitTask()}
                className="black br4 bg-white-70 mh2 mv1 f5 ph2 w-20"
              > Add </button>
          </div>
      </div>
    )
  }
}

export default TaskInput
