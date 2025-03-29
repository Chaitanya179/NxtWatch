import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {IoSaveOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import SideBar from '../SideBar'
import Header from '../Header'
import Failed from '../Failed'
import ReactContext from '../../Context/ReactContext'
import {
  HomeDiv,
  BottomDiv,
  Content,
  LoaderDiv,
  VideoDiv,
  Player,
  P,
  Dp,
  DetailDiv,
  SubDetailDiv,
  Pdiv,
  Img,
  Bdiv,
  Btn,
  Lp,
} from './styledcomponents'

class PlayVideo extends Component {
  state = {
    status: 'INITIAL',
    videoDetails: {},
    like: false,
    dislike: false,
    save: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  retry = () => {
    this.setState({status: 'INITIAL'}, this.fetchData)
  }

  failed = () => <Failed retry={this.retry} />

  loader = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="Oval" color="#3b82f6" height={50} width={50} />
    </LoaderDiv>
  )

  fetchData = async () => {
    this.setState({status: 'LOADING'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, option)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details
      const uvideoDetails = {
        channel: {
          name: videoDetails.channel.name,
          profileImg: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        published: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({status: 'SUCCESS', videoDetails: uvideoDetails})
    } else {
      this.setState({status: 'FAILED'})
    }
  }

  like = () => {
    this.setState(prev => {
      if (prev.dislike) {
        return {dislike: !prev.dislike, like: !prev.like}
      }
      return {like: !prev.like}
    })
  }

  dislike = () => {
    this.setState(prev => {
      if (prev.like) {
        return {like: !prev.like, dislike: !prev.dislike}
      }
      return {dislike: !prev.dislike}
    })
  }

  save = () => {
    this.setState(prev => ({save: !prev.save}))
  }

  success = () => {
    const {videoDetails} = this.state
    const {
      channel,
      description,
      id,
      published,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {name, profileImg, subscriberCount} = channel
    let publishedDate = formatDistanceToNow(new Date(published)).split(' ')
    publishedDate = publishedDate.slice(1, 3).join(' ')

    return (
      <ReactContext.Consumer>
        {value => {
          const {dark, setSave, saved} = value
          const {like, dislike, save} = this.state
          let isSaved = saved.findIndex(i => i.id === id)
          isSaved = !(isSaved === -1)
          if (isSaved !== save) {
            this.save()
          }
          const saves = () => {
            this.save()
            setSave({
              id,
              thumbnailUrl,
              title,
              viewCount,
              published,
              name,
              profileImg,
            })
          }

          return (
            <VideoDiv>
              <Player url={videoUrl} width="100%" controls />
              <P dark={dark}>{title}</P>
              <DetailDiv>
                <SubDetailDiv>
                  <Dp dark={dark}>{`${viewCount} views`}</Dp>
                  <Dp dark={dark}>{`${publishedDate} ago`}</Dp>
                </SubDetailDiv>
                <SubDetailDiv>
                  <Pdiv>
                    <Btn clicked={like} onClick={this.like} dark={dark}>
                      <AiOutlineLike />

                      <Dp dark={dark} clicked={like}>
                        Like
                      </Dp>
                    </Btn>
                  </Pdiv>
                  <Pdiv>
                    <Btn clicked={dislike} onClick={this.dislike} dark={dark}>
                      <AiOutlineDislike />
                      <Dp dark={dark} clicked={dislike}>
                        Dislike
                      </Dp>
                    </Btn>
                  </Pdiv>
                  <Pdiv>
                    <Btn clicked={save} onClick={saves} dark={dark}>
                      <IoSaveOutline />
                      <Dp dark={dark} clicked={save}>
                        {save ? 'Saved' : 'Save'}
                      </Dp>
                    </Btn>
                  </Pdiv>
                </SubDetailDiv>
              </DetailDiv>
              <hr />
              <SubDetailDiv>
                <Img src={profileImg} alt="channel logo" />
                <Bdiv>
                  <Lp dark={dark}>{name}</Lp>
                  <Dp>{subscriberCount}</Dp>
                </Bdiv>
              </SubDetailDiv>
              <Lp dark={dark}>{description}</Lp>
            </VideoDiv>
          )
        }}
      </ReactContext.Consumer>
    )
  }

  appendData = () => {
    const {status} = this.state
    switch (status) {
      case 'LOADING':
        return this.loader()
      case 'FAILED':
        return this.failed()
      case 'SUCCESS':
        return this.success()
      default:
        return <></>
    }
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <HomeDiv dark={dark}>
              <Header />
              <BottomDiv>
                <SideBar />
                <Content>{this.appendData()}</Content>
              </BottomDiv>
            </HomeDiv>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default PlayVideo
