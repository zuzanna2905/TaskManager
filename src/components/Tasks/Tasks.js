import React from 'react'
import ListItem from '../ListItem/ListItem';
const url = 'http://localhost:3001/tasks';

class Tasks extends React.Component {
  listItems = () => {
    if(this.props.tasks){
      return this.props.tasks.map((task) => 
      <ListItem 
        key={task.id}
        value={task.task} 
        id={task.id}
        category={task.category}
        priority={task.priority}
        handleDelete={this.handleDelete} 
        handleDetails = {this.handleDetails}
        handleEdit = {this.handleEdit}     
      />);
    }
  }

  TaskList = () => this.listItems();

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