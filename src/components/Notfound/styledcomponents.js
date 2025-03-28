import styled from 'styled-components'

export const HomeDiv = styled.div`
display:flex;
flex-direction:column;
height:100vh;
background-color:${props => (props.dark ? '#181818' : '#f9f9f9')}`

export const BottomDiv = styled.div`
height:100vh;
display:flex;;
flex-direction:column;
@media(min-width:768px)
{
flex-direction:row;}`

export const NotDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-grow:1;
`

export const Img = styled.img`
width:200px;
height:200px;
@media(min-width:768px)
{width:30%;}`

export const H = styled.h1`
margin:15px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')}`

export const P = styled.p`
text-align:center;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
margin:0px;`
