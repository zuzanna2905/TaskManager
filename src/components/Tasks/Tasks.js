import React from 'react'
import ListItem from '../ListItem/ListItem';
import './Tasks.css'
const url = 'http://localhost:3001/tasks';

class Tasks extends React.Component {
  listItems = () => {
    if(this.props.tasks){
      return this.props.tasks.reverse().map((task) => 
      <ListItem 
        key={task.id}
        value={task.task} 
        id={task.id}
        handleDelete={this.handleDelete}  
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
      <div className='mv4'>
        <ul className="overflow-y-auto vh-50 list">
          <this.TaskList />
        </ul>
      </div>
      )
  }
}

export default Tasks;