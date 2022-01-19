import React from 'react'
import styled from 'styled-components'
import { Search, LocalGroceryStoreOutlined, Person } from '@mui/icons-material'
import { Badge } from '@mui/material'

const Container = styled.div`
  height: 60px;
  background-color: #f6f7f6;
  align-items: center;
  width: 100%;
`
const Cover = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  font-weight: 900;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 2px;
  width: 185px;
  border-radius: 7px;
  margin-bottom: 5px;
  background-color: #f6f7f6;
`
const Input = styled.input`
  /* contain: content; */
  border: none;
  height: 30px;
  background-color: #f6f7f6;
`
const Middle = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
`
const Options = styled.div`
  color: black;
  font-weight: bold;
  padding: 3px;
  margin: 5px;
  font-size: 16px;
`

function Navbar() {
  return (
    <Container>
      <Cover>
        <Left>
          <h2>WorthIT</h2>
        </Left>
        <Middle>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: '20px' }} />
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
