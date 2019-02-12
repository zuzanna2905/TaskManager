import React from 'react';
const itemDesign = 'flex center ma3 f5 justify-between bg-white-60 ba pv1 ph1 br4 shadow-5 w-80 w-50-m w-30-l';
const buttonDesign = 'black br4 mh2 mv1';
const textDesign = 'mh2';

const ListItem = (props) => {
  return (
    <li>
      <div className={itemDesign}>
          <p className={textDesign}>{props.value}</p>
          <button className={buttonDesign} onClick={props.deleteItem(props.id)}>Done</button>
      </div>
    </li>
  )
}

export default ListItem;
