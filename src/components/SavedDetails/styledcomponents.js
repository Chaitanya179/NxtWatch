import styled from 'styled-components'

export const Li = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media (min-width: 500px) {
    width: 100%;
    flex-direction: row;
    height: 160px;
  }
  @media (min-width: 768px) {
    width: 85%;
  }
`

export const Img = styled.img`
  width: 100%;
  @media (min-width: 500px) {
    width: 300px;
  }
`
export const DetailsDiv = styled.div`
  padding-left: 8px;
`

export const H = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const P = styled.p`
  margin: 8px;
  font-family: 'Roboto';
  margin-left: 0px;
  color: ${props => (props.dark ? '#7e858e' : '#616e7c')};
  font-size: 13px;
`
export const Ldiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  @media (min-width: 500px) {
    margin-top: 0px;
  }
`

export const Pimg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  @media (min-width: 500px) {
    display: none;
  }
`
