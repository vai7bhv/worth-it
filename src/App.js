import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Cart from './pages/Cart'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'

const Container = styled.div``

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
