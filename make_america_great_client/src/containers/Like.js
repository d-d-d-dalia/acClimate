import React from 'react';

const Like = (props) => {
	// console.log('like is being called')
	console.log(props)
  return (
    <div>
    {props.likes}
    <br/>
    <button onClick={props.handleOnLike}>Like</button>
    </div>
  )
}

export default Like