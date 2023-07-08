import React from 'react'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detailpage from './pages/Detailpage'
import Bookticket from './pages/Bookticket'

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='Moviebookingapp/' element={<Home/>}/>
      <Route path='/detailpage/:id' element={<Detailpage/>}/>
      <Route  path='/bookticket/:id' element={<Bookticket/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App