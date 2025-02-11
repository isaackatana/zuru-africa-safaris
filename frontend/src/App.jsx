import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
