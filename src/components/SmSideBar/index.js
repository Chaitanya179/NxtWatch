import {IoHome, IoSaveOutline} from 'react-icons/io5'
import {AiFillFire} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import {SmSideMain, Ul, Li, LiBtn, P, SmClose, ClsBtn} from './styledcomponents'
import ReactContext from '../../Context/ReactContext'

const SideBarList = [
  {name: 'Home', icon: <IoHome />},
  {name: 'Trending', icon: <AiFillFire />},
  {name: 'Gaming', icon: <FaGamepad />},
  {name: 'Saved Videos', icon: <IoSaveOutline />},
]

const SmSideBar = props => {
  const {close} = props
  return (
    <ReactContext.Consumer>
      {value => {
        const {dark, active, setActive} = value
        return (
          <SmSideMain dark={dark}>
            <SmClose>
              <ClsBtn onClick={close} dark={dark}>
                X
              </ClsBtn>
            </SmClose>
            <Ul>
              {SideBarList.map(i => {
                const {name, icon} = i
                return (
                  <Li key={name}>
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
                )
              })}
            </Ul>
          </SmSideMain>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default SmSideBar
