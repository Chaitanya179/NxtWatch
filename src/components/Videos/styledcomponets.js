import styled from 'styled-components'

export const Search = styled.input`
outline:none;
border-width:0px;
padding-left:8px;
height:100%;
flex-grow:1;
`
export const Searchdiv = styled.div`
height:30px;
width:100%;
display:flex;
align-items:center;
border:1px solid #475569;
@media(min-width:768px)
{
    width:35%;
}`

export const SearchIcon = styled.button`
width:45px;
height:100%;
border-width:0px;
cursor:pointer;
border-left:1px solid #475569;
display:flex;
justify-content:center;
align-items:center;
background-color:#f1f1f1;
outline:none;`

export const LoaderDiv = styled.div`
padding:45px;
display:flex;
flex-direction:column;
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

export const Ul = styled.ul`
width:100%;
list-style-type:none;
padding:0px;
margin-bottom:0px;
display:flex;
flex-wrap:wrap;
flex-grow:1;`
