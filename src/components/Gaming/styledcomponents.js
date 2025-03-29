import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`

export const BottomDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const LoaderDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Banner = styled.div`
  display: flex;
  height: 45px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => (props.dark ? '#231f20' : '#e2e8f0')};
  color: #ff0000;
  @media (min-width: 576px) {
    height: 60px;
  }
`

export const H = styled.h1`
  margin-left: 10px;
  text-align: center;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  font-size: 10px;
  @media (min-width: 768px) {
    margin-left: 15px;
    font-size: 20px;
  }
`
export const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const StyledLink = styled(Link)`
  width: 40%;
  text-decoration: none;
  margin: 10px;
  border-radius: 5px;
  @media (min-width: 450px) {
    width: 25%;
  }
  @media (min-width: 768px) {
    width: 200px;
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const Gh = styled.p`
  font-weight: bold;
  font-size: 9px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 5px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  @media (min-width: 500px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const P = styled.p`
  font-size: 8px;
  margin-top: 5px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#7e858e' : '#616e7c')};
  @media (min-width: 500px) {
    font-size: 13px;
  }
`
