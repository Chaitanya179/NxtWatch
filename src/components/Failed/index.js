import ReactContext from '../../Context/ReactContext'
import {FailedDiv, Img, H, P, Btn} from './styledcomponents'

const Failed = props => {
  const {retry} = props
  return (
    <ReactContext.Consumer>
      {value => {
        const {dark} = value
        const imgUrl = dark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailedDiv>
            <Img src={imgUrl} alt="failed" />
            <H dark={dark}>Oops! Something Went Wrong</H>
            <P dark={dark}>
              We are having some trouble to complete your request.Plaese try
              again.
            </P>
            <Btn onClick={retry}>Retry</Btn>
          </FailedDiv>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default Failed
