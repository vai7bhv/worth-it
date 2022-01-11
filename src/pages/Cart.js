import { height } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`
const Title = styled.h1``
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.button`
  font-weight: 900;
  padding: 8px;
  justify-content: space-between;
  margin: 5px;
  border: 2px solid blue

  cursor: pointer;

  background-color: lightsteelblue;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`

const ProductDetails = styled.div`
  display: flex;
  margin: 20px;
  margin-left: 20px;
  /* justify-content: space-between; */
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Name = styled.h3`
  font-size: ${(props) => props.name === 'seller' && '13px'};
`
const Price = styled.span`
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 10px;
  margin-left: 20px;
  padding: 20px;
  height: 50vh;
  font-weight: bolder;
`
const SummaryTitle = styled.h2`
  font-weight: 900;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const SummaryText = styled.div``
const SummaryPrice = styled.div``

function Cart() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Cart</Title>

        <Bottom>
          <Info>
            <ProductDetails>
              <Image src='https://5.imimg.com/data5/EP/DC/GB/SELLER-43948449/solderless-breadboard-with-400-points-500x500.jpg' />
              <Details>
                <Name>BreadBoard</Name>
                <Name name='seller'>From : seller name</Name>
                <Price>
                  <b>₹199</b>
                </Price>
              </Details>
            </ProductDetails>
            <hr />
            <ProductDetails>
              <Image src='https://www.madrasshoppe.com/26746-large_default/programming-in-ansi-c-balagurusamy.jpg' />
              <Details>
                <Name>Programming in ANSI C</Name>
                <Name name='seller'>From : seller name</Name>

                <Price>
                  <b>₹599</b>
                </Price>
              </Details>
            </ProductDetails>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>Product : </SummaryText>
              <SummaryPrice>2</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Price : </SummaryText>
              <SummaryPrice>₹898</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Address : </SummaryText>
              <SummaryText>abc ,abc ,abc 364834</SummaryText>
            </SummaryItem>

            <Button>Change Address</Button>
            <Button>CHECK OUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  )
}

export default Cart
