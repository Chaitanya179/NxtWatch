import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {IoSunnyOutline, IoLogOutOutline, IoMenu} from 'react-icons/io5'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import SmSideBar from '../SmSideBar'
import {
  MainDiv,
  NavImg,
  EventDiv,
  ProfImg,
  LogoutBtn,
  ModeBtn,
  SmModeBtn,
  LogoutDiv,
  PopBtn,
  PopDiv,
  P,
} from './styledcomponents'
import ReactContext from '../../Context/ReactContext'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwtToken')
    const {history} = props
    history.replace('/login')
  }
  return (
    <ReactContext.Consumer>
      {value => {
        const {dark, setMode} = value
        const imageUrl = dark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        console.log(dark)
        return (
          <MainDiv dark={dark}>
            <NavImg src={imageUrl} alt="website logo" />
            <EventDiv>
              <ModeBtn type="button" dark={dark} onClick={setMode}>
                {dark ? <IoSunnyOutline /> : <FaMoon />}
              </ModeBtn>
              <ProfImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutBtn type="button" dark={dark}>
                    Logout
                  </LogoutBtn>
                }
              >
                {close => (
                  <LogoutDiv dark={dark}>
                    <P dark={dark}>Are you sure you want to logout</P>
                    <PopDiv>
                      <PopBtn type="button" text="cancel" onClick={close}>
                        Cancel
                      </PopBtn>
                      <PopBtn text="confirm" type="button" onClick={logout}>
                        Confirm
                      </PopBtn>
                    </PopDiv>
                  </LogoutDiv>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <SmModeBtn type="button" dark={dark}>
                    <IoMenu />
                  </SmModeBtn>
                }
              >
                {close => <SmSideBar close={close} />}
              </Popup>
              <Popup
                modal
                trigger={
                  <SmModeBtn type="button" dark={dark}>
                    <IoLogOutOutline />
                  </SmModeBtn>
                }
              >
                {close => (
                  <LogoutDiv dark={dark}>
                    <P dark={dark}>Are you sure you want to logout</P>
                    <PopDiv>
                      <PopBtn
                        type="button"
                        text="cancel"
                        onClick={() => {
                          close()
                        }}
                      >
                        Cancel
                      </PopBtn>
                      <PopBtn text="confirm" type="button" onClick={logout}>
                        Confirm
                      </PopBtn>
                    </PopDiv>
                  </LogoutDiv>
                )}
              </Popup>
            </EventDiv>
          </MainDiv>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default withRouter(Header)
