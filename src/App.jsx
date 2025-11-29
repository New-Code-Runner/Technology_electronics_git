
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ThemeProvider from './Components/ThemeProvider'

function App() {

  return (
    <>

      <div className="w-full mx-auto">
      <ThemeProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </ThemeProvider>
      </div>
      
      
    </>
  )
}

export default App
