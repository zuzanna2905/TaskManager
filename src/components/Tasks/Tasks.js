import React from 'react'
import ListItem from '../ListItem/ListItem';

class Tasks extends React.Component {

  listItems = () => {
    if(this.props.tasks){
      return this.props.tasks.map((task) => 
      <ListItem key={task.id}
              value={task.name} />);
    }
  }

  TaskList = () => this.listItems();

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
