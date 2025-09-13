import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Greeting from './Greeting'
import Counter from './Counter'
import Timer from '../Timer'
import UserGreeting from './UserGreeting'
import PropsFunction from './PropsFunction'
import PropsList from './PropsList'
import PropsObject from './PropsObject'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)
 
  const section = () => {alert("Hello from props")};

  const list = ["Apple","Orange", "Coconut","Banana"];

  const obj = { name : "Abhishek", age : "25"}
  return (
    <>
      {/* <Welcome /> */}
      {/* <Greeting /> */}

      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <UserGreeting name="RLSI" year={2025}/> */}
      {/* <PropsFunction handleClick={section} text="Belagavi"/> */}

      {/* <PropsList list={list}/> */}
      {/* <PropsObject object = {obj}/> */}

      {/* <Login isLoggedIn={true} /> */}
    </>

    
  )
}
export default App
