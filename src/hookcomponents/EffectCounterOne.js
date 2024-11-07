import React, { useEffect, useState } from 'react'

function EffectCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
      console.log("useEffect updating document title by count")
        document.title = `You Clicked ${count} times`
    },[count])

  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
    </div>
  )
}

export default EffectCounterOne