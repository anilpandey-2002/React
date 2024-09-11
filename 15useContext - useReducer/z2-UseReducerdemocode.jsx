// // reducer.js
// export const initialState = { count: 0 };

// export function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       throw new Error();
//   }
// }

// // Counter.js
// import React, { useReducer } from 'react';
// import { initialState, reducer } from './reducer';

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

// // App.js
// import React from 'react';
// import Counter from './Counter';

// function App() {
//   return (
//     <div className="App">
//       <h1>Simple Counter with useReducer</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;
