import styled from 'styled-components'

export const MainDiv = styled.div`
background-color:${props => (props.dark ? '#0f0f0f' : '#ffffff')};
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
`

export const NavImg = styled.img`
width:100px;
height:30px;
@media (min-width:768px)
{
width:110px;
height:35px;
}
`

export const EventDiv = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;`

export const ProfImg = styled.img`
display:none;
@media (min-width:768px)
{display:inline;
    width:30px;
   height:30px;
   margin:0px 20px;
}`

export const LogoutBtn = styled.button`
display:none;
@media(min-width:768px)
{
display:inline;
padding:0px 10px;
height:30px;
background-color:transparent;
color:${props => (props.dark ? '#ffffff' : '#3b82fc')};
border:${props => (props.dark ? '1px solid #ffffff' : '1px solid #3b82fc')};
cursor:pointer;
outline:none;
}`

export const ModeBtn = styled.button`
height:35px;
width:35px;
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')};
background-color:transparent;
outline:none;
cursor:pointer;
font-size:25px;
display:flex;
justify-content:center;
align-items:center;
border-width:0px;
`

export const SmModeBtn = styled(ModeBtn)`
margin-left:5px;
width:40px;
height:40px;
font-size:30px;
@media (min-width:768px)
{
    display:none
}`

export const LogoutDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:${props => (props.dark ? '#0f0f0f' : '#ffffff')};
width:300px;
padding:25px 0px;
border-radius:15px;`

export const PopBtn = styled.button`
background-color:${props =>
  props.text === 'confirm' ? '#3b82fc' : 'transparent'};
color:${props => (props.text === 'confirm' ? '#ffffff' : '#64748b')};
border-width:${props => props.text === 'confirm' && '0px'};
border:${props => props.text === 'cancel' && '1px solid #64748b'};
margin:10px;
width:80px;
height:35px;
cursor:pointer;
outline:none;
`

export const PopDiv = styled.div`
display:flex;
flex-direction:row;`

export const P = styled.p`
color:${props => (props.dark ? '#ffffff' : '#0f0f0f')}`
