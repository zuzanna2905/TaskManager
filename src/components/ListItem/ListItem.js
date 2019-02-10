import React from 'react';
const itemDesign = 'bg-light-silver flex center ma3 f5 justify-between ba pv1 ph1 br4 shadow-5 w-80 w-50-m w-30-l';
const buttonDesign = 'white bg-mid-gray br4 mh2 mv1';
const textDesign = 'mh2';

const ListItem = (props) => {
  return (
    <li>
      <div className={itemDesign}>
          <p className={textDesign}>{props.value}</p>
          <button className={buttonDesign}>Done</button>
      </div>
    </li>
  )
}

export default ListItem;
