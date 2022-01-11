import React from 'react'
import styled from 'styled-components'
import { newItems } from '../data'
import SingleItem from './SingleItem'

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  justify-content: space-between;
  border: 2px solid gray;
  object-fit: contain;
  border-radius: 5px;
  margin-left: 10vw;
  margin-right: 10vh;
  padding: 20px;
`
const Heading = styled.div`
  font-weight: bolder;
  font-size: 20px;
  margin: 3px;
  padding-top: 4px;
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
