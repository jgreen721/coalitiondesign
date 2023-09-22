import {Home,History,Team} from "./views"
import {Routes, Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </div>
  )
}

export default App
