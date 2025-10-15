import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Name from './Name'

function App() {
  const [name, setName] = useState("Anu");
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(23);

  //useEffect
  useEffect(() => {
    console.log("You have clicked on the button");
    setTimeout(() => setCount(count + 1), 1000)
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((count) => (count+1))}>count is {count}</button><div></div>
      <button onClick={() => setName((name) => "Ram Kumar")}>Change the Name</button><div></div>
      <button onClick={() => setAge((age) => 37)}>Change the Age</button>
      <Name name = {name} age={age} count={count}/>
    </>
  )
}

export default App
