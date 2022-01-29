import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`
const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 280px;
  height: 350px;
  min-width: 280px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f5fbfd;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  &:hover ${Info} {
    opacity: 1;
  }
`

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `
// const Item = styled.div``
const Image = styled.img`
  max-width: 80%;
  max-height: auto;
  object-fit: contain;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  z-index: 2;
`
// const Title = styled.h3``
// const Icons = styled.div`
//   display: flex;
// `
const Details = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;

  background: none;
  object-fit: cover;
`
const Name = styled.h3`
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
  background: none;
  margin: 10px;
  text-decoration: none;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
`
const Icon = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

// const Button = styled.button`
//   color: black;
//   background-color: #9985c4;
//   font-weight: bolder;
//   border: none;
//   position: relative;
//   bottom: 1;
//   cursor: pointer;
//   height: 4vh;
/* ` */
function SingleItem({ item }) {
  return (
    <Container>
      <Link
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        to={`/product/${item._id}`}
      >
        <Image src={item.images[0].url} alt='product image' />
        <Details>
          <Name>{item.name}</Name>
          <Name>₹{item.price}</Name>
        </Details>
        <Info>
          {/* <Title>{item.name}</Title> */}
          {/* <Icons> */}
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
          {/* </Icons> */}
        </Info>
      </Link>
    </Container>
  )
}

export default SingleItem
