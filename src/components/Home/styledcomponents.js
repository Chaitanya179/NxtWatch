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

export const Banner = styled.div`
background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
background-position:center center;
background-size:cover;
width:100%;
height:200px;
padding-bottom:10px;
display:${props => props.close && 'none'}`

export const Content = styled.div`
flex-grow:1;
display:flex;
flex-direction:column;
overflow:auto;`

export const CloseDiv = styled.div`
padding:5px;
display:flex;
justify-content:flex-end;`

export const Close = styled.button`
font-size:15px;
font-weight:bold;
cursor:pointer;
border-width:0px;
outline:none;
background-color:transparent;`

export const BannerContent = styled.div`
width:60%;
display:flex;
flex-direction:column;
padding-left:20px;
`
export const Img = styled.img`
width:120px;
height:35px;`

export const BuyBtn = styled.button`
width:120px;
height:30px;
border:1px solid #000;
color:#000;
cursor:pointer;
outline:none;
background-color:transparent;
cursor:pointer;`

export const VideoCon = styled.div`
padding:15px;
padding-bottom:0px;
flex-grow:1;
display:flex;
flex-direction:column;`
