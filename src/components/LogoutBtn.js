import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'

export const LogoutBtn = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <button
      type='button'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
