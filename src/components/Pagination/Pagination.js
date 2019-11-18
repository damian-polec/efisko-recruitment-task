import React from 'react';

const pagination = props => {
  return (
    <div className='pagination'>
      <p onClick={props.prev}>Prev</p>
      <p onClick={props.next}>Next</p>
    </div>
  )
}


export default pagination;