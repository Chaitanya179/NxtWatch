import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import ReactContext from '../../Context/ReactContext'
import Videos from '../Videos'

import {
  HomeDiv,
  BottomDiv,
  Banner,
  Content,
  CloseDiv,
  Close,
  BannerContent,
  Img,
  BuyBtn,
  VideoCon,
} from './styledcomponents'

class Home extends Component {
  state = {close: false}

  close = () => {
    this.setState({close: true})
  }

  render() {
    const {close} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <HomeDiv dark={dark}>
              <Header active="Home" />
              <BottomDiv>
                <SideBar active="Home" />
                <Content>
                  <Banner close={close} data-testid="banner">
                    <CloseDiv>
                      <Close
                        onClick={this.close}
                        type="button"
                        data-testid="close"
                      >
                        X
                      </Close>
                    </CloseDiv>
                    <BannerContent>
                      <Img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                      <BuyBtn type="button">GET IT NOW</BuyBtn>
                    </BannerContent>
                  </Banner>
                  <VideoCon>
                    <Videos />
                  </VideoCon>
                </Content>
              </BottomDiv>
            </HomeDiv>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
