import { Delete, LaunchOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { getAllRequests } from '../action/requestAction'
import MetaData from '../component/MetaData'

const Container = styled.div`
  min-height: 100vh;
  background-color: #e2eafc;
  /* background-image: url('/image/SimpleShiny.svg'); */
`

const Button = styled.button`
  width: 200px;
  margin-left: 80vw;
  background-color: #343a40;
  padding: 10px;
  color: #fdfffc;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 2vw;
  &:hover {
    background-color: #8e9aaf;
    color: #dfe7fd;
  }
`
const Req = styled.div`
  margin: 20px;
`
const Name = styled.h2`
  text-align: center;
  font: 400 1.2vmax;
  padding: 0.5vmax;
  margin: 4vh;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  background-color: rgb(44, 44, 44);
`
const Item = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 3vh;
`
const Title = styled.h3`
  flex-wrap: wrap;
  max-width: 30vw;
`
const Desc = styled.h3`
  text-align: center;
`

function Requests() {
  const dispatch = useDispatch()
  const { loading, error, requests } = useSelector((state) => state.allRequests)

  const { user } = useSelector((state) => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllRequests())
  }, [])
  const columns = [
    {
      field: 'Name',
      headerName: 'Name',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'Description',
      headerName: 'Description',
      minWidth: 250,
      flex: 0.3,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 150,
      flex: 0.3,
    },
  ]
  const rows = []

  requests &&
    requests.forEach((item, index) => {
      rows.push({
        id: item._id,
        Name: item.name,
        Description: item.description,
        email: item.email,
      })
    })

  return (
    <Container>
      <MetaData title='Requests -- WorthIT' />
      <Button onClick={() => navigate('/requestItem')}>Request Item</Button>

      <Req>
        <Name> All Requests </Name>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          // className='myOrdersTable'
          autoHeight
          sx={{
            boxShadow: 2,
            color: 'black',
            fontWeight: 600,

            // border: 2,
            // borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </Req>
    </Container>
  )
}

export default Requests
