import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {Li, Img, DetailsDiv, H, P, Ldiv, Pimg} from './styledcomponents'
import ReactContext from '../../Context/ReactContext'

const SavedDetails = props => {
  const {details} = props
  const {
    id,
    name,
    published,
    thumbnailUrl,
    title,
    viewCount,
    profileImg,
  } = details
  let publishedDate = formatDistanceToNow(new Date(published)).split(' ')
  publishedDate = publishedDate.slice(1, 3).join(' ')
  const def = () => {
    const {history} = props
    history.push(`/videos/${id}`)
  }
  return (
    <ReactContext.Consumer>
      {value => {
        const {dark} = value
        return (
          <Li onClick={def}>
            <Img src={thumbnailUrl} alt="video thumbnail" />
            <DetailsDiv>
              <Ldiv>
                <Pimg src={profileImg} alt="profile" />
                <H dark={dark}>{title}</H>
              </Ldiv>
              <P dark={dark}>{name}</P>
              <Ldiv>
                <P dark={dark}>{`${viewCount} views`}</P>
                <P dark={dark}>{`${publishedDate} ago`}</P>
              </Ldiv>
            </DetailsDiv>
          </Li>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default withRouter(SavedDetails)
