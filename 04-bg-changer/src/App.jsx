import { useState } from "react"
import Button from "./components/Button";

function App() {
  const [colour, setColour] = useState("olive");
  const colors = ["red", "green", "blue", "olive", "gray", "yellow", "pink", "purple", "lavender", "white", "black"];
  const blackText = ["yellow", "pink", "lavender", "white"];

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-normal gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {
            colors.map(color => (<Button key={color} color={color} setColour={setColour} blackText={blackText} />))
          }
        </div>
      </div>
    </div>
  )
}

export default App
