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
  font-weight: 900;
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
  font-weight: 300;
  font-weight: 900;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 900;
`

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 20%;
  padding: 15px 20px;
  color: 'white';

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 900;
  margin-left: 3px;
`

const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='email address' />
          <Input placeholder='confirm password' />
          <Input placeholder='password' />
        </Form>
        <Agreement>
          By creating an account I consent to the processing of my personal data
          in accordance with the
          <Link>PRIVACY POLICY</Link>
          <br />
        </Agreement>
        <Button>SIGN UP</Button>
      </Wrapper>
    </Container>
  )
}

export default Signup
