import {formatDistanceToNow} from 'date-fns'
import {
  Li,
  Img,
  ProfileDiv,
  ProfileImg,
  P,
  DetailsDiv,
  Dp,
  LastDiv,
  StyledLink,
} from './styledcomponents'
import ReactContext from '../../Context/ReactContext'

const VideoCard = props => {
  const {details} = props
  const {channel, id, published, thumbnail, title, viewCount} = details
  let publishedDate = formatDistanceToNow(new Date(published)).split(' ')
  publishedDate = publishedDate.slice(1, 3).join(' ')
  const {name, profileImageUrl} = channel
  return (
    <ReactContext.Consumer>
      {value => {
        const {dark} = value
        return (
          <Li>
            <StyledLink to={`/videos/${id}`}>
              <Img src={thumbnail} alt="video thumbnail" />
              <ProfileDiv>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <P dark={dark}>{title}</P>
              </ProfileDiv>
              <DetailsDiv>
                <div>
                  <Dp>{name}</Dp>
                </div>
                <LastDiv>
                  <Dp>{viewCount}</Dp>
                  <Dp>{`${publishedDate} ago`}</Dp>
                </LastDiv>
              </DetailsDiv>
            </StyledLink>
          </Li>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default VideoCard
