import React from 'react'
import styled from 'styled-components'
import { newItems } from '../data'
import SingleItem from './SingleItem'

const Container = styled.div`
  margin-top: 50px;
  /* display: flex; */
  flex-wrap: hidden;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  /* object-fit: contain; */
  border-radius: 5px;
  margin-left: 20px;
  padding: 20px;
  overflow-x: scroll;

  width: 95%;
`
const Heading = styled.div`
  font-weight: bolder;
  font-size: 25px;
  /* margin: 2px; */
  padding-top: 2px;
`

const Items = styled.div`
  display: flex;
`

function NewItems() {
  return (
    <Container>
      <Heading>
        <h4>Newly added items</h4>
      </Heading>
      <Items>
        {newItems.map((item) => (
          <SingleItem item={item} />
        ))}
      </Items>
    </Container>
  )
}

export default NewItems
