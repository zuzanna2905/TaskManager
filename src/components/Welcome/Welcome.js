import React from 'react';

const Welcome = (props) => {
  return (
    <div>
      <h1 className="black">Hi! Sign in to managing your task</h1>
      <h2>No account?<span onClick={() => props.onRouteChange('register')}> Create one!</span></h2>
    </div>
  )
}

export default Welcome
