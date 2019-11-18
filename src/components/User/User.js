import React from 'react';
import styled from 'styled-components';

const UserWrapper = styled.div`
  width: 45%;
  border-radius: 25px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
`
const Avatar = styled.img`
  height: 75px;
  width: 75px;
  margin: 0 10px 0 0;
  border-radius: 50%;
`

const UserData = styled.p`
  margin: 0;
`
const User = props => {
  return (
    <UserWrapper
      onClick={props.click}>
      <Avatar src={props.avatar}/>
      <UserData>{props.firstName} {props.lastName}</UserData>     
    </UserWrapper>
  )
}

export default User;