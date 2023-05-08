import { useReducer } from 'react'
import './App.css'

function reducerFn(state, action) {
  switch(action.type){
    case 'increment':
      return {count : state.count+1}
    default :
      throw new Error()
  }
}

function App() {

  const [state, dispatch] = useReducer(reducerFn, {count : 0}) // dispatch an action aka send

  return (
    <main>
      <h1>counter : {state.count}</h1>
      <button onClick={() => dispatch({type:'increment'})}>+1</button>

    </main>
  )
}

export default App
