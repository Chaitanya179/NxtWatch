import {Link} from 'react-router-dom'
import {Li, Img, DetailsDiv, H, P, Ldiv, Pimg} from './styledcomponents'
import ReactContext from '../../Context/ReactContext'

const SavedDetails = props => {
  const {details} = props
  console.log(details)
  const {id, name, publishedDate, thumbnailUrl, title, viewCount, profileImg} =
    details
  return (
    <ReactContext.Consumer>
      {value => {
        const {dark} = value
        return (
          <Link to={`/videos/${id}`}>
            <Li>
              <Img src={thumbnailUrl} alt="thumbnail" />
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
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default SavedDetails
