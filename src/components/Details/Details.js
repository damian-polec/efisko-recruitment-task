import React from 'react';
import styled from 'styled-components';

const UserDetails = styled.div`
`

const details = props => {
  return (
    <UserDetails>
      <p>{props.firstName} {props.lastName}</p>
      <p>{props.email}</p>
    </UserDetails>    
  )
}

export default details;