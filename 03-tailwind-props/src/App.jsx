import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-yellow-300 text-6xl font-extrabold font-mono mb-4'>Hello World</h1>
      <div className='flex gap-5'>
        <Card username="Hola Amigo" price="798.4" />
        <Card username="Mongli" price="0.112" />
      </div>
    </div>
  )
}

export default App
