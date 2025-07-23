import './App.css'
import Calendar from './components/Calendar'
import { august2025 } from './data/august2025'

function App() {
  return (
    <>
      <div className="summer-gradient"></div>
      <div className="sun"></div>
      <Calendar data={august2025} />
    </>
  )
}

export default App
