import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import User from '../User/User';
import Details from '../Details/Details';
import Pagination from '../Pagination/Pagination';


const AppWrapper = styled.main`
 height: 75vh;
 width: 80%;
 margin: 0 auto;
 border: 2px solid #000;
 display: flex;
`

const UsersWrapper = styled.div`
  width: 66%;
  margin: 0;
  padding: 0;
  border-right: 2px solid #000;
  display: flex;
  flex-wrap: wrap;
`

const UserWrapper = styled.div`

`


const Users = props => {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [page, setPage] = useState('1');
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(err => console.log(err))
  }, [page]);

  const onUserHandler = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.data);
      })
      .catch(err => console.log(err))
  }

  const onNextPageHandler = () => {
    let lastPage = page;
    const nextPage = parseInt(lastPage) + 1;
    fetch(`https://reqres.in/api/users?page=${nextPage}`)
      .then(res => res.json())
      .then(data => {
        if(data.data.length > 0) {
          setPage(nextPage);
          setUsers(data.data);
        } else {
          return;
        }
      })
      .catch(err => console.log(err))
  }
  
  const onPrevPageHandler = () => {
    let lastPage = page;
    const prevPage = +lastPage - 1;
    if(prevPage === 0) {
      return;
    }
    fetch(`https://reqres.in/api/users?page=${prevPage}`)
    .then(res => res.json())
    .then(data => {
      setPage(prevPage);
      setUsers(data.data);
    })
    .catch(err => console.log(err))
  }
  let usersList = null;

  if(users) {
    usersList = users.map(user => {
      return (
        <User
          key={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          avatar={user.avatar}
          click={() => onUserHandler(user.id)} 
        />
      )
    })
  }

  let details = 'Click on person to see details';

  if(user) {
    details = (
      <Details 
        firstName={user.first_name}
        lastName={user.last_name}
        email={user.email}
      />
    )
  }

  return (
    <Fragment>
      <AppWrapper>
        <UsersWrapper>
          {usersList}
        </UsersWrapper>
        <UserWrapper>
          {details}
        </UserWrapper>
      </AppWrapper>
      <Pagination 
        next={onNextPageHandler}
        prev={onPrevPageHandler}/>
    </Fragment>
  )
}


export default Users;