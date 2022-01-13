import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:linear-gradient(rgba(255,255,255,0.5),
  rgba(255,255,255,0.5)
  ), url(https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/09/13204610/13092017_Books_02.jpg ) center;
display : flex; 

align-items: center; 
justify-content: center;

`; 

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;

`; 

const Form = styled.form`
display:flex;
flex-wrap: wrap;
flex-direction: column;
`; 

const Title = styled.h1`
font-size: 24px;
font-weight:300;

`; 

const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`; 

const Agreement = styled.span`
font-size: 14px;
margin: 20px 0px;
`; 

const Button = styled.button`
width:20%;
padding:15px 20px;
background: "palevioletred" ;
color: "white";

font-size: .80em;
margin: 1em;

border: 2px solid palevioletred;
border-radius: 3px;
cursor:pointer;


`; 
const Textarea=styled.div`
flex:1;
width:100%;
margin: 20px 10px 0px 0px;
padding: 10px;

height:100%;

`;


const AddItem = () => {
    return (
        <Container>
        <Wrapper>
            <Title>
               Add an Item
            </Title>
            <Form>
                <Input placeholder="Name of an Item"/>
                <Input placeholder="Description"/>                
                <Input placeholder="Category"/>
                <Input type="number" placeholder="Price" min="0" />    
                           </Form>
                           <Button>SUBMIT</Button>
        </Wrapper>
    </Container>
    )
}

export default AddItem;
