import React from 'react'
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'
import SingleItem from '../component/SingleItem'
import { newItems } from '../data'
//import "../data"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  /* flex: 1; */
`

const Image = styled.img`
  width: 100%;
  height: 60vh;
  margin-bottom: 10px;
  object-fit: cover;
`

const Info = styled.div`
  height: 100%;
  width: 100%;
  /* position: absolute; */
  opacity: 1;

  /* background-color: rgba(0, 0, 0, 0.2); */
  /* top: 0;
  left: 0;
  z-index: 3; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`

const Icon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  z-index: 1;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 900;
`
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 600;
`
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
// const AmountContainer=styled.div`
// display : flex;
// align-items:center;
// font-weight: 700;
// `;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: space-between;
`
const Button = styled.button`
  background-color: 'gray';
  color: 'white';

  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;

  cursor: pointer;

  /* &:hover {
    background-color: #f8f4f9;
  } */
`
const Text = styled.button`
  background: 'blue';
  color: 'black';
  margin-top: 200px;
  margin-bottom: 200px;
  margin: 0.9em;
  font-size: 17px;
  font-weight: 900;
  padding: -0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  padding: 4px;
  transition: all 0.5s ease;

  cursor: pointer;
  &:hover {
    background-color: #dcd2df;
    transform: scale(1.1);
  }
`

const Similar = styled.div`
  margin: 10px;
  margin-left: 20px;
  flex-wrap: wrap;
  overflow-x: scroll;
`
const Items = styled.div`
  display: flex;
`

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src='https://images-na.ssl-images-amazon.com/images/I/41AyOrtLJ6L._SX367_BO1,204,203,200_.jpg' />
          <Info>
            <Icon>
              <ShoppingCartOutlined fontSize='large' />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined fontSize='large' />
            </Icon>
          </Info>
        </ImgContainer>
        <InfoContainer>
          <Title>ANSI C</Title>
          <Desc>
            Learn Programming C.ANSI C, ISO C, and Standard C are successive
            standards for the C programming language published by the American
            National Standards Institute (ANSI) and the International
            Organization for Standardization (ISO).
          </Desc>
          <Price>
            ₹500 <br />
          </Price>
          <Button>
            <Text>Contact Owner </Text>
            <Text>BUY NOW </Text>
          </Button>
        </InfoContainer>
      </Wrapper>
      <Similar>
        <Title>Similar Items</Title>
        <Items>
          {newItems.map((item) => (
            <SingleItem item={item} />
          ))}
        </Items>
      </Similar>
    </Container>
  )
}

export default Product
