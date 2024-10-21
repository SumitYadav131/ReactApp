import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2 key={person.id}>I am {person.firstName}{person.lastName} and my id is {person.id}</h2>
    </div>
  )
}

export default Person