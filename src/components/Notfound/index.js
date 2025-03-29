import ReactContext from '../../Context/ReactContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {HomeDiv, BottomDiv, NotDiv, Img, H, P} from './styledcomponents'

const Notfound = () => (
  <ReactContext.Consumer>
    {value => {
      const {dark} = value
      const imageUrl = dark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <HomeDiv dark={dark}>
          <Header />
          <BottomDiv>
            <SideBar />
            <NotDiv>
              <Img src={imageUrl} alt="not found" />
              <H dark={dark}>Page Not Found</H>
              <P dark={dark}>
                We are sorry, the page you requested could not be found.
              </P>
            </NotDiv>
          </BottomDiv>
        </HomeDiv>
      )
    }}
  </ReactContext.Consumer>
)

export default Notfound
