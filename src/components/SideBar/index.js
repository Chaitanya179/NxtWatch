import {IoHome, IoSaveOutline} from 'react-icons/io5'
import {AiFillFire} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import ReactContext from '../../Context/ReactContext'
import {
  SideMain,
  Ul,
  Li,
  P,
  LiBtn,
  LastDiv,
  Lhead,
  LImgDiv,
  Lp,
  Limg,
  StyledLink,
} from './styledcomponents'

const SideBarList = [
  {name: 'Home', icon: <IoHome />},
  {name: 'Trending', icon: <AiFillFire />},
  {name: 'Gaming', icon: <FaGamepad />},
  {name: 'Saved Videos', icon: <IoSaveOutline />},
]

const SideBar = () => (
  <ReactContext.Consumer>
    {value => {
      const {dark, active, setActive} = value
      return (
        <>
          <SideMain dark={dark}>
            <Ul>
              {SideBarList.map(i => {
                const {name, icon} = i
                let lname = name.toLowerCase()
                lname = lname.split(' ')
                lname = lname.join('-')
                lname = lname === 'home' ? '/' : `/${lname}`
                return (
                  <StyledLink to={lname} key={name}>
                    <Li>
                      <LiBtn
                        type="button"
                        onClick={() => {
                          setActive(name)
                        }}
                        dark={dark}
                        active={active === name}
                      >
                        {icon}
                        <P dark={dark}>{name}</P>
                      </LiBtn>
                    </Li>
                  </StyledLink>
                )
              })}
            </Ul>
            <LastDiv>
              <Lhead dark={dark}>Contact Us</Lhead>
              <LImgDiv>
                <Limg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Limg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Limg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </LImgDiv>
              <Lp dark={dark}>Enjoy! Now you can see your recommendations!</Lp>
            </LastDiv>
          </SideMain>
        </>
      )
    }}
  </ReactContext.Consumer>
)

export default SideBar
