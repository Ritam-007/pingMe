import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className="left-part w-[30%] bg-green-400 text-gray-50">
      <Search />
      <Users />
      <Logout />
    </div>
  )
}

export default Left
