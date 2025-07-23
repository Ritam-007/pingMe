import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'

function Right() {
  return (
    <div className='right-part h-screen w-[70%] bg-transparent text-gray-50 flex flex-col'>
      <ChatUser />
      <div className='flex-1 overflow-y-auto hide-scrollbar' style={{ maxHeight:"calc(92.5vh - 8vh)" }}>
        <Messages />
      </div>
      <TypeSend />
    </div>
  )
}

export default Right
