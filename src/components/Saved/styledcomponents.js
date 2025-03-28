import styled from 'styled-components'

export const HomeDiv = styled.div`
display:flex;
flex-direction:column;
height:100vh;
background-color:${props => (props.dark ? '#181818' : '#f9f9f9')}`

export const BottomDiv = styled.div`
height:100vh;
display:flex;
flex-direction:column;
@media(min-width:768px)
{
    flex-direction:row;
}`

export const Content = styled.div`
flex-grow:1;
height:100%;
display:flex;
flex-direction:column;
overflow:auto;
border:1px solid blue;`

export const Fail = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const Img = styled.img`width:200px;
height:200px;
@media(min-width:768px)
{
    width:350px;
    height:350px;
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
margin:0px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
font-size:8px;
text-align:center;
width:80%;
@media(min-width:768px)
{
    font-size:15px;
}`

export const Ul = styled.ul`
list-style-type:none;
padding:0px;
margin:0px;
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:20px;
border:1px solid red;`

export const Banner = styled.div`
display:flex;
height:45px;
flex-direction:row;
align-items:center;
padding-left:20px;
background-color:${props => (props.dark ? '#231f20' : '#7e858e')};
color:#ff0000;
@media(min-width:576px)
{
    height:60px;
}`
