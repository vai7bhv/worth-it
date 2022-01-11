import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`
const Container = styled.div`
  margin: 5px;
  display: flex;
  flex: 1;
  height: 350px;
  min-width: 280px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* background-color: #f5fbfd; */
  /* border: 2px solid gray;
  border-radius: 7px; */
  cursor: pointer;

  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
// const Item = styled.div``
const Image = styled.img`
  width: 250px;
  height: 75%;
  object-fit: cover;
  align-items: center;
  border-radius: 10px;
  z-index: 2;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

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
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default SingleItem
