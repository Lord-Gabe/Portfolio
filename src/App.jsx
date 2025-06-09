import './App.css'
import Conditions from './components/Conditions.jsx'
import Test1 from './components/Test1.jsx'
import Test2 from './components/Test2.jsx'
import Test3 from './components/Test3.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test1 />}/>
        <Route path="/Affliates" element={<Test2 />}/>
        <Route path="/Donate" element={<Test3 />}/>
      </Routes>
      {/* <Conditions /> */}
    </BrowserRouter>
    </>
  )
}

export default App
