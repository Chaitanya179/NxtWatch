import {IoSaveOutline} from 'react-icons/io5'
import ReactContext from '../../Context/ReactContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedDeatils from '../SavedDetails'
import {
  HomeDiv,
  BottomDiv,
  Content,
  Fail,
  Img,
  H,
  P,
  Ul,
  Banner,
} from './styledcomponents'

const Saved = () => (
  <ReactContext.Consumer>
    {value => {
      const {saved, dark} = value
      const failed = () => (
        <Fail>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <H dark={dark}>No Saved Videos Found</H>
          <P dark={dark}>you can save your videos while watching them</P>
        </Fail>
      )

      const append = () => (
        <div>
          <Banner dark={dark}>
            <IoSaveOutline />
            <H dark={dark}>Saved Videos</H>
          </Banner>
          <Ul>
            {saved.map(i => (
              <SavedDeatils key={i.id} details={i} />
            ))}
          </Ul>
        </div>
      )

      return (
        <HomeDiv dark={dark}>
          <Header active="Saved Videos" />
          <BottomDiv>
            <SideBar active="Saved Videos" />
            <Content>{saved.length === 0 ? failed() : append()}</Content>
          </BottomDiv>
        </HomeDiv>
      )
    }}
  </ReactContext.Consumer>
)

export default Saved
