import React from 'react';

const UserInfo = ({name, areTasks}) => {
  if(areTasks){
  return (
    <div className='f3 mv1'>
      Hi {name}!
      Your tasks
    </div>
  )}
  else {
    return (
    <div className='f3 mv1'>
      Hi {name}!
      You have no tasks
    </div>
  )}
}

export default UserInfo;