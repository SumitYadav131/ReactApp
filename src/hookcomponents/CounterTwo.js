import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default :
            return state
    }
}

function CounterTwo() {

    const [count,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>firstCounter : {count.firstCounter}</div>
        <div>secondCounter : {count.secondCounter}</div>
        <button onClick={() => dispatch({type: 'increment', value : 1})}>Increament</button>
        <button onClick={() => dispatch({type: 'decrement', value : 1})}>Decreament</button>
        <button onClick={() => dispatch({type: 'increment', value : 5})}>Increament 5</button>
        <button onClick={() => dispatch({type: 'decrement', value : 5})}>Decreament 5</button>
        <div>
        <button onClick={() => dispatch({type: 'increment2', value : 1})}>Increament counter Two</button>
        <button onClick={() => dispatch({type: 'decrement2', value : 1})}>Decreament counter Two</button>
        </div>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        
    </div>
  )
}

export default CounterTwo