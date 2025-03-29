import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SmSideMain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
`

export const SmClose = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
`

export const Ul = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Li = styled.li`
  width: 100%;
  height: 35px;
  margin: 15px 0px;
`

export const LiBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  width: 100%;
  height: 100%;
  border-width: 0px;
  color: ${props => (props.active ? '#ff0000' : '#7e858e')};
  background-color: ${props => {
    if (props.dark && props.active) {
      return '#424242'
    }
    if (props.active) {
      return '#ebebeb'
    }
    return 'transparent'
  }};
`

export const P = styled.p`
  margin-left: 10px;
  font-size: 15px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`

export const ClsBtn = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  border-width: 0px;
  font-weight: bold;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
