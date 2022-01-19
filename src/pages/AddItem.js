import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/09/13204610/13092017_Books_02.jpg)
      center;
  display: flex;
  font-weight: 900;

  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-weight: 900;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 900;
`

const Button = styled.button`
  width: 20%;
  padding: 12px 15px;
  color: 'white';
  font-size: 17px;
  margin: 1em;
  font-weight: 900;
  border-radius: 3px;
  cursor: pointer;
`

const AddItem = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Add an Item</Title>
        <Form>
          <Input placeholder='Name of an Item' />
          <Input placeholder='Description' />
          <Input placeholder='Category' />
          <Input type='number' placeholder='Price' min='0' />
        </Form>
        <Button>
          <b>SUBMIT</b>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default AddItem
