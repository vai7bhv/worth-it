import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import AddItem from './pages/AddItem'
import AllProduct from './pages/AllProduct'
import Cart from './pages/Cart'
import DashBoard from './pages/DashBoard'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Signup from './pages/Signup'

const Container = styled.div``

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/products/:keyword' element={<AllProduct />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
