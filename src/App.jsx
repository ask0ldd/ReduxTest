import { useReducer } from 'react'
import './App.css'

function reducerFn(state, action) { // reducer : fonction traitant une action, appelee lors d'un dispatch
  switch(action.type){
    case 'increment':
      console.log(action.payload.target.id) // event passed as payload
      return {clicked : action.payload.target.id, count : state.count+1}
    case 'decrement':
      return {...state, count : state.count-1}
    default :
      throw new Error()
  }
}

function App() {

  const [state, dispatch] = useReducer(reducerFn, {count : 0, clicked : "none"}) // dispatch an action aka send

  return (
    <main>
      <h1>counter : {state.count} / clicked : {state.clicked}</h1>
      <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <button id="decButton" onClick={() => dispatch({type:'decrement'})}>-1</button>
        <button id="incButton" onClick={(e) => dispatch({type:'increment', payload:e})}>+1</button>
      </div>

    </main>
  )
}

export default App
