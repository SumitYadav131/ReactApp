import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default :
            return state
    }
}

function CounterThree() {

    const [count,dispatch] = useReducer(reducer, initialState)
    const [countTwo,dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
        <div>
        Count : {count}
        </div>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <button onClick={() => dispatch('increment')}>Increament</button>
        <button onClick={() => dispatch('decrement')}>Decreament</button>

        <div>
        CountTwo : {countTwo}
        </div>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
        <button onClick={() => dispatchTwo('increment')}>Increament</button>
        <button onClick={() => dispatchTwo('decrement')}>Decreament</button>
    </div>
  )
}

export default CounterThree