import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideMain = styled.div`
display:none;
@media(min-width:768px)
{ width:17%;
flex-shrink:0;
height:100%;
background-color:${props => (props.dark ? '#0f0f0f' : '#ffffff')};
display:flex;
flex-direction:column;
justify-content:space-between;
}
@media(min-width:768px) and (max-width:991px)
{
  width:20%;
}
`

export const Ul = styled.div`
padding:0px;
list-style-type:none;`

export const Li = styled.li`
margin:10px 0px;`

export const P = styled.p`
margin:0px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
font-weight:bold;
margin-left:5px;
font-size:14px;
`

export const LiBtn = styled.button`
display:flex;
cursor:pointer;
outline:none;
font-size:20px;
align-items:center;
width:100%;
padding:5px;
padding-left:10px;
border-width:0px;
color:${props => (props.active ? '#ff0000' : '#7e858e')};
background-color:${props => {
  if (props.dark && props.active) {
    return '#424242'
  }
  if (props.active) {
    return '#ebebeb'
  }
  return 'transparent'
}}
`
export const LastDiv = styled.div`
padding-left:10px;`

export const Lhead = styled.h1`
font-size:20px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')}`

export const LImgDiv = styled.div`
display:flex;
margin:25px 0px;`

export const Limg = styled.img`
margin-right:10px;
width:35px;
height:35px;`

export const Lp = styled.p`
font-family:"Bree Serif";
font-style:italic;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')}
`
export const StyledLink = styled(Link)`
text-decoration:none;`
