import React from 'react';
const itemDesign = 'flex center f6 b--black-20 bg-white-60 ba br4 w-80';

const ListItem = (props) => {
  return (
    <li className='flex'>
      <div className={itemDesign}>
        <p className='w-40'>{props.value}</p>
        <p className='w-20'>Category: {props.category}</p>
        <p className='w-20'>Priority: {props.priority}</p>
        <button className='w-20 br4 bg-black-20' onClick={() => props.handleDelete(props.id)}>Done</button>
      </div>
    </li>
  )
}

export default ListItem;
