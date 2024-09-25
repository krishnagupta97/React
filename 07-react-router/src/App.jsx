import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import User from './components/User/User'
import Github from './components/Github/Github'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />} />
        <Route path='/user/:userid' element={<User />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
