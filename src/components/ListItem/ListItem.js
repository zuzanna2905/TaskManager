import React from 'react';
const itemDesign = 'flex center ma3 f5 b--black-20 justify-between bg-white-60 ba pv1 ph1 br4 shadow-5 w-90 w-60-m w-40-l';
const buttonDesign = 'black br4 mh2 mv1 bg-white-70';
const textDesign = 'mh2';

const ListItem = (props) => {
  return (
    <li>
      <div className={itemDesign}>
          <p className={textDesign}>{props.value}</p>
          <button className={buttonDesign} onClick={() => props.handleDelete(props.id)}>Done</button>
        //  <button className={buttonDesign} onClick={() => props.handleDetails(props.id)} >Details</button>
      </div>
    </li>
  )
}

export default ListItem;
