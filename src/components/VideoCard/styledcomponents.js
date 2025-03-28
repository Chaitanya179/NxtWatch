import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Li = styled.li`
margin:10Px;
width:100%;
@media(min-width:576px)
{
    width:40%;
}
@media(min-width:768px)
{
    width:30%;
}
`

export const Img = styled.img`
width:100%;`

export const ProfileDiv = styled.div`
display:flex;
flex-direxction:row;
align-items:center;`

export const ProfileImg = styled.img`
width:30px;
height:30px;`

export const P = styled.p`
font-size:10px;
padding-left:8px;
margin:0px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')}`

export const Dp = styled(P)`
color:#616e7c;
margin-right:10px;
font-size:13px`

export const DetailsDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-top:5px;
@media(min-width:576px)
{
display:block;
}`

export const LastDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
@media(min-width:576px)
{
    margin-top:8px;
}`

export const StyledLink = styled(Link)`
text-decoration:none;`
