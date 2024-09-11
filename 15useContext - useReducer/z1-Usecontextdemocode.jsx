// // ThemeContext.js
// import React from 'react';

// const ThemeContext = React.createContext();

// export default ThemeContext;

// // App.js
// import React, { useState } from 'react';
// import ThemeContext from './ThemeContext';
// import Toolbar from './Toolbar';

// function App() {
//   const [theme, setTheme] = useState('light');

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// // Toolbar.js
// import React from 'react';
// import ThemedButton from './ThemedButton';

// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// export default Toolbar;

// // ThemedButton.js
// import React, { useContext } from 'react';
// import ThemeContext from './ThemeContext';

// function ThemedButton() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <button
//         style={{
//           backgroundColor: theme === 'light' ? '#fff' : '#333',
//           color: theme === 'light' ? '#000' : '#fff',
//         }}
//       >
//         I am styled by theme context!
//       </button>
//       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// export default ThemedButton;
