import { BrowserRouter, Route, Routes } from 'react-router'
import { LigeNu } from './pages/ligenu'
import { History } from './pages/history'
import { Oversigt } from './pages/oversigt'
import { Navbar } from './components/Navbar/navbar'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LigeNu/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/oversigt" element={<Oversigt/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
