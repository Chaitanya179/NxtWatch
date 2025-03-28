import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const HomeDiv = styled.div`
display:flex;
flex-direction:column;
height:100vh;
background-color:${props => (props.dark ? '#181818' : '#f9f9f9')}`

export const BottomDiv = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
@media(min-width:768px)
{
    flex-direction:row;
}`

export const LoaderDiv = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const Content = styled.div`
height:100%;
flex-grow:1;
border:1px solid blue;`

export const VideoDiv = styled.div`
border:1px solid red;
height:100%;
padding:20px;
overflow:auto;`

export const Player = styled(ReactPlayer)`
height:60% !important;
@media (min-width:768px)
{
    height:75% !important;
}`

export const P = styled.p`
font-size:12px;
font-weight:bold;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
margin-bottom:8px;
@media(min-width:768px)
{
    font-size:15px;
}`

export const Dp = styled.p`
font-size:10px;
margin:0px;
margin-right:7px;
margin-left:3px;
color:${props => {
  if (props.clicked) {
    return '#3b82f6'
  }
  return props.dark ? '#7e858e' : '#616e7c'
}};
@media(min-width:768px)
{
    font-size:12px;
};
`

export const DetailDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;`

export const SubDetailDiv = styled(DetailDiv)`
justify-content:flex-start;
flex-wrap:nowrap;
margin-bottom:10px;
`
export const Pdiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const Img = styled.img`
width:35px;
height:35px;`

export const Bdiv = styled.div`margin-left:10px;
display:flex;
flex-direction:column;
justify-content:center;`

export const Btn = styled.button`
background-color:transparent;
cursor:pointer;
outline:none;
color:${props => {
  if (props.clicked) {
    return '#3b82f6'
  }
  return props.dark ? '#7e858e' : '#616e7c'
}};
display:flex;
align-items:center;
font-size:15px;
border-width:0px;
`
export const Lp = styled(P)`
font-weight:normal;
margin:0px;
margin-bottom:5px;`
