import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Counter from './Components/Counter'
import Stopwatch from './Components/Stopwatch'
import Refex from './Components/Refex'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/stopwatch" element={<Stopwatch/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
        <Route path="/Refex" element={<Refex/>}></Route>
      </Routes>

    </div>
  )
}
export default App