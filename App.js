import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './Error'
import Home from './Home';
import Login from './Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;