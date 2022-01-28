import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProduct } from '../action/productAction'
import SingleItem from '../component/SingleItem'
import { allProducts } from '../data'

const Container = styled.div`
  align-items: center;
  justify-content: center;
`
const FilterContainer = styled.div`
  display: flex;
`
const Filter = styled.div`
  margin: 20px;
  font-weight: 900;
  font-size: 17px;
`
const FilterText = styled.span`
  display: flex;

  margin-bottom: 5px;
`
const FilterCover = styled.div`
  display: flex;
  flex-direction: column;
`
const Select = styled.select`
  font-weight: 900;
  font-size: 15px;
  padding: 5px;
  margin: 2px;
`
const Option = styled.option`
  font-weight: 900;
  font-size: 15px;
`

const Categories = styled.div`
  margin: 20px;
  margin-top: 50px;
  width: 80%;
  align-items: center;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-lef: 0px; */
  margin: 30px;
  margin-top: 0px;
`
const CategoryName = styled.h2`
  margin: 20px;
`

function AllProduct() {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  console.log(products[0])

  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterText>Price</FilterText>

          <Select>
            <Option>0-100</Option>
            <Option>100-200</Option>
            <Option>200-500</Option>
            <Option>500-1000</Option>
            <Option>1000-max</Option>
          </Select>
        </Filter>
        {/* <FilterText>Category</FilterText>
        <Select>
          <Option>0-100</Option>
          <Option>100-200</Option>
          <Option>200-500</Option>
          <Option>500-1000</Option>
          <Option>1000-max</Option>
        </Select>

        <Filter>
          <FilterText>SORT</FilterText>
        </Filter> */}
      </FilterContainer>
      <Categories>
        <CategoryName>Category 1</CategoryName>

        <Items>
          {products && products.map((item) => <SingleItem item={item} />)}
        </Items>

        {/* <Items>
          {allProducts &&
            allProducts.slice(0, 6).map((item) => <SingleItem item={item} />)}
        </Items> */}
      </Categories>
    </Container>
  )
}

export default AllProduct
