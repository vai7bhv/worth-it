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
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  font-weight: 800;
`

const Button = styled.button`
  width: 20%;
  padding: 15px 20px;
  color: 'black';
  font-weight: 900;

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 900;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='email address' />

          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          {/* <label >New at Worth It?</label> */}
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
