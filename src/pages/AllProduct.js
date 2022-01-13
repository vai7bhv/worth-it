import React from 'react'
import styled from 'styled-components'
import SingleItem from '../component/SingleItem'
import { allProducts } from '../data'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function AllProduct() {
  return (
    <Container>
      {allProducts.map((item) => (
        <SingleItem item={item} />
      ))}
    </Container>
  )
}

export default AllProduct
