import React, { useState } from 'react'
import styled from 'styled-components'
import { LocalGroceryStoreOutlined, Person, Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  background-color: #f6f7f6;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`
const Cover = styled.div`
  padding: 15px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  font-weight: 900;
  cursor: pointer;
  @media (max-width: 600px) {
    flex: 0.5;
    padding: 0%;
  }
`
const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 2px;
  width: 20vw;
  border-radius: 7px;
  margin-bottom: 5px;
  background-color: #f6f7f6;
`
const Input = styled.input`
  contain: content;
  border: none;
  height: 30px;
  background-color: #f6f7f6;
  outline: none;
  font-weight: 700;
  font-size: 15px;
  width: 18vw;
  @media (max-width: 600px) {
    width: 14vw;
  }
`
const Middle = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    flex: 0.5;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
  @media (max-width: 600px) {
    margin-left: 0;
    flex: 2;
    justify-content: flex-start;
  }
`
const Options = styled.div`
  color: black;
  font-weight: bold;
  padding: 3px;
  margin: 5px;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-left: 0;
  }
`

function Navbar() {
  const [keyword, setKeyword] = useState('')
  const history = useNavigate()
  // const { history } = this.props

  const searchHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history(`/products/${keyword}`)
    } else {
      history('/products')
    }
  }
  console.log(keyword)

  return (
    <Container>
      <Cover>
        <Left>
          <h2>WorthIT</h2>
        </Left>
        <Middle>
          <SearchContainer>
            <Input
              placeholder='search ...'
              type='search'
              onSubmit={searchHandler}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <Search
              onClick={searchHandler}
              style={{ color: 'gray', fontSize: '20px' }}
            />
          </SearchContainer>
        </Middle>
        <Right>
          <Options>SIGN IN</Options>
          <Options>LOG IN</Options>
          <Badge badgeContent={1} color='secondary'>
            <LocalGroceryStoreOutlined fontSize='large' />
          </Badge>
          <Person fontSize='large' style={{ marginLeft: '5px' }} />
        </Right>
      </Cover>
    </Container>
  )
}

export default Navbar
