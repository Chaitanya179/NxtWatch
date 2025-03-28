import styled from 'styled-components'

export const FailedDiv = styled.div`
border:1px solid red;
padding:45px;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const Img = styled.img`
width:150px;
height:150px;
@media(min-width:768px)
{
    width:250px;
    height:250px;
}`

export const H = styled.h1`
margin:5px;
text-align:center;
font-family:"Roboto";
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
font-size:10px;
@media(min-width:768px)
{
margin:10px;
font-size:20px;}
`

export const P = styled.p`
margin:5px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
font-size:8px;
text-align:center;
width:80%;
@media(min-width:768px)
{margin:10px;
    font-size:15px;
}`

export const Btn = styled.button`
width:65px;
height:25px;
color:#ffffff;
background-color:#4f46e5;
outline:none;
border-width:0px;
cursor:pointer;
border-radius:3px;
@media(min-width:768px)
{width:95px;
height:35px;
border-radius:8px;}`
