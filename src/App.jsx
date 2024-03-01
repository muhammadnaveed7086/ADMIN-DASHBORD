import React from 'react'
import "./index.css";
import Sidebar from './components/Sidebar/Sidebar';
import Maindash from './components/Maindash/Maindash';
import RightSide from './components/RightSide/RightSide';
function App() {
  return (
    <>
      <div className="App">
         <div className="AppGlass">
         <Sidebar/>
         <Maindash/>
         <RightSide/>
         </div>
      </div>
      </>
  )
}

export default App
