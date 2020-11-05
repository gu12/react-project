// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
import { createStore } from 'redux'
const ADD = 'add'
const DELATE = 'delate'
let initState = 0
function reducer(state = initState, action) {
  switch (action.type) {
    case ADD:
      return state + 1
    case DELATE:
      return state - 1

    default:
      return state


  }
}

let store = createStore(reducer)
let state = store.getState()
console.log('state', state)

let valuedom = document.getElementById('counter-value')
let counterdom = document.getElementById('counter')

function render(){
   valuedom.innerHTML = store.getState()
}
store.subscribe(render)
counterdom.addEventListener('click',function(e){
  if(e.target.innerHTML === '+'){
    store.dispatch({
      type:ADD
    })
  }else{
    store.dispatch({
      type:DELATE
    })
  }
  
})