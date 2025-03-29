import {Component} from 'react'
import {FaGamepad} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ReactContext from '../../Context/ReactContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Failed from '../Failed'
import {
  HomeDiv,
  BottomDiv,
  Content,
  LoaderDiv,
  Banner,
  H,
  Ul,
  Img,
  Gh,
  P,
  StyledLink,
} from './styledcomponents'

class Gaming extends Component {
  state = {status: 'INITIAL', videos: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({status: 'LOADING'})
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', option)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const uvideos = videos.map(i => ({
        id: i.id,
        thumbnailUrl: i.thumbnail_url,
        title: i.title,
        viewCount: i.view_count,
      }))
      this.setState({status: 'SUCCESS', videos: uvideos})
    } else {
      this.setState({status: 'FAILED'})
    }
  }

  loader = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="Oval" color="#3b82f6" height={50} width={50} />
    </LoaderDiv>
  )

  retry = () => {
    this.setState({status: 'INITIAL'})
  }

  success = () => {
    const {videos} = this.state
    console.log(videos)
    return (
      <ReactContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <div>
              <Banner dark={dark}>
                <FaGamepad />
                <H dark={dark}>Gaming</H>
              </Banner>
              <Ul>
                {videos.map(i => {
                  const {id, thumbnailUrl, title, viewCount} = i
                  return (
                    <StyledLink to={`/videos/${id}`} key={id}>
                      <li>
                        <Img src={thumbnailUrl} alt="video thumbnail" />
                        <Gh dark={dark}>{title}</Gh>
                        <P>{`${viewCount} Watching Worldwide`}</P>
                      </li>
                    </StyledLink>
                  )
                })}
              </Ul>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }

  append = () => {
    const {status} = this.state
    switch (status) {
      case 'LOADING':
        return this.loader()
      case 'FAILED':
        return <Failed retry={this.retry} />
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
              <Header active="Gaming" />
              <BottomDiv>
                <SideBar active="Gaming" />
                <Content>{this.append()}</Content>
              </BottomDiv>
            </HomeDiv>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Gaming
