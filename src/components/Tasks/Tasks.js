import React from 'react'
import ListItem from '../ListItem/ListItem';

class Tasks extends React.Component {

  listItems = () => {
    if(this.props.tasks){
      return this.props.tasks.map((task) => 
      <ListItem key={task.id}
              value={task.name} deleteItem={this.deleteItem}/>);
    }
  }

  TaskList = () => this.listItems();

  deleteItem = (taskid) => {
    // fetch('http://localhost:3001/tasks/:id', {
    //     method: 'delete',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({
    //          userid: this.state.user.id,
    //          id: taskid
    //     })
    // })
    // .then(response => response.json())
    // .then(task => {
    // })
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
