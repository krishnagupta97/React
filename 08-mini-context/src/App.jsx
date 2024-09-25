import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <div className="w-full h-full flex flex-col items-center font-sans text-white">
      <UserContextProvider>
        <h1 className="text-5xl font-semibold my-8">This is Context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
