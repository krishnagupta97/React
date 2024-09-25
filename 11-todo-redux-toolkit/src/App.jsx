import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="font-mono min-h-screen h-full flex flex-col items-center  bg-gray-600">
      <h1 className="text-4xl font-bold my-8 text-white">Lets learn about Redux</h1>
      <AddTodo />
      <hr />
      <Todos />
    </div>
  )
}

export default App
