import React, { useContext } from 'react'
import { UserContext , ChannelContext } from '../App'

function ComponentF() {

    const user = useContext(UserContext)
    const Channel = useContext(ChannelContext)

  return (
    <div>
        {user }- {Channel}
    </div>
  )
}

export default ComponentF