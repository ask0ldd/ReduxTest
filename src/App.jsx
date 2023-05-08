import { useReducer } from 'react'
import './App.css'

function reducerFn(state, action) { // reducer : fonction traitant une action, appelee lors d'un dispatch
  switch(action.type){
    case 'increment':
      console.log(action.payload) // event passed as payload
      return {count : state.count+1}
    case 'decrement':
      return {count : state.count-1}
    default :
      throw new Error()
  }
}

function App() {

  const [state, dispatch] = useReducer(reducerFn, {count : 0}) // dispatch an action aka send

  return (
    <main>
      <h1>counter : {state.count}</h1>
      <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        <button onClick={() => dispatch({type:'decrement'})}>-1</button>
        <button onClick={(e) => dispatch({type:'increment', payload:e})}>+1</button>
      </div>

    </main>
  )
}

export default App
