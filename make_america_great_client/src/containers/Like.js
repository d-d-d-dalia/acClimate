import React from 'react';

const Like = (props) => {
  return (
    <div>
    {props.like}
    <br/>
    <button onClick={props.handleOnLike}>Like</button>
    </div>
  )
}

export default Like