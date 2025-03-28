import styled from 'styled-components'

export const MainDiv = styled.div`
height:100vh;
background-color:${props => (props.dark ? '#212121' : '#ffffff')};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const LoginCard = styled.div`
background-color:${props => (props.dark ? '#0f0f0f' : '#ffffff')};;
box-shadow:${props => !props.dark && '0px 0px 16px 8px #dfdfdf'};
display:flex;
flex-direction:column;
align-items:center;
border-radius:15px;
width:80%;
padding-bottom:20px;
@media (min-width:768px)
{
    width:350px;
}
`

export const LoginImage = styled.img`
width:120px;
height:45px;
margin:20px 0px;
@media (min-width:768px)
{
    width:180px;
    height:50px;
}`

export const Form = styled.form`
width:90%;
`
export const ShowPassword = styled.div`display:flex;
align-items:center;`

export const Label = styled.label`
font-size:15px;
color:${props => (props.dark ? '#ffffff' : '#475569')};
font-weight:bold;`

export const Input = styled.input`
width:95%;
height:30px;
color:${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
background:none;
background-color:transparent;
border:${props => (props.dark ? '1px solid #ffffff' : '1px solid #94a3b8')};
outline:none;
border-radius:3px;
padding-left:10px;
margin-bottom:10px;
margin-top:5px;
`
export const Button = styled.button`
width:95%;
height:28px;
cursor:pointer;
border-width:0px;
border-radius:6px;
font-size:15px;
font-weight:bold;
outline:none;
background-color:#3b82f6;
color:#ffffff;
margin-top:10px;`

export const Error = styled.p`
color:red;
margin-top:5px;
font-size:12px;`
