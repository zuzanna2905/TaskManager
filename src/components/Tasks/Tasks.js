import React from 'react'
import ListItem from '../ListItem/ListItem';
const url = 'http://localhost:3001/tasks';

class Tasks extends React.Component {

  listItems = () => {
    if(this.props.tasks){
      return this.props.tasks.map((task) => 
      <ListItem key={task.id}
              value={task.task} id={task.id} handleDelete={this.handleDelete} handleDetails = {this.handleDetails}/>);
    }
  }

  TaskList = () => this.listItems();

  handleDetails = () => {

  }

  handleDelete = (taskid) => {
    let deleteUrl = url + '/' + taskid;
    fetch(deleteUrl, {
      method: 'delete',
      headers: {'Content-Type' : 'application/json'},
    })
    .then(response => response.json())
    .then(
      this.props.loadData()
    )
  }

  render() {
    return (
      <div>
        <ul className="list">
          <this.TaskList />
        </ul>
      </div>
      )
  }
}

export default Tasks;