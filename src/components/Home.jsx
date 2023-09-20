import React from 'react'
import { Todos } from "./Todos";
import { Login } from "./Login";
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


export const Home = () => {
    const {user}=useContext(UserContext)
  return (
    <>
     {user ? <Todos /> : <Login />}
    </>
  )
}
