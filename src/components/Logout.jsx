import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export const Logout = () => {
  const {logoutUser} = useContext(UserContext)
    
  return (
    <div>
        <Button variant="contained" onClick={logoutUser}> <LogoutIcon /> </Button>
    </div>

  )
}
