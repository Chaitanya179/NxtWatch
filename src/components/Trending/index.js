import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ReactContext from '../../Context/ReactContext'
import SideBar from '../SideBar'
import Header from '../Header'
import Failed from '../Failed'
import SavedDetails from '../SavedDetails'
import {HomeDiv, BottomDiv, Content, LoaderDiv, Ul} from './styledcomponents'

class Trending extends Component {
  state = {status: 'INITIAL', videos: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({status: 'LOADING'})
    const jwtToken = Cookies.get('jwtToken')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/trending', option)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const uvideos = videos.map(i => ({
        name: i.channel.name,
        profileImg: i.channel.profile_image_url,
        id: i.id,
        title: i.title,
        thumbnailUrl: i.thumbnail_url,
        published: i.published_at,
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
    return (
      <Ul>
        {videos.map(i => (
          <SavedDetails key={i.id} details={i} />
        ))}
      </Ul>
    )
  }

  appendDeatils = () => {
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
              <Header active="Trending" />
              <BottomDiv>
                <SideBar active="Trending" />
                <Content>{this.appendDeatils()}</Content>
              </BottomDiv>
            </HomeDiv>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Trending
