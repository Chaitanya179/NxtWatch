import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {IoSearchSharp} from 'react-icons/io5'
import {
  Search,
  Searchdiv,
  SearchIcon,
  LoaderDiv,
  Img,
  H,
  P,
  Ul,
} from './styledcomponets'
import VideoCard from '../VideoCard'
import ReactContext from '../../Context/ReactContext'
import Failed from '../Failed'

class Videos extends Component {
  state = {status: 'Initial', videos: [], search: '', searchq: ''}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({status: 'Loading'})
    const token = Cookies.get('jwtToken')
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all/?search=${search}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, option)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const uvideos = videos.map(i => ({
        channel: {
          name: i.channel.name,
          profileImageUrl: i.channel.profile_image_url,
        },
        id: i.id,
        published: i.published_at,
        thumbnail: i.thumbnail_url,
        title: i.title,
        viewCount: i.view_count,
      }))
      this.setState({status: 'Success', videos: uvideos})
    } else {
      this.setState({status: 'Failed'})
    }
  }

  loader = () => (
    <LoaderDiv>
      <Loader type="Oval" color="#3b82f6" height={50} width={50} />
    </LoaderDiv>
  )

  retry = () => {
    this.setState({status: 'Initial'}, this.fetchData)
  }

  failed = () => <Failed retry={this.retry} />

  noresults = () => (
    <ReactContext.Consumer>
      {value => {
        const {dark} = value
        return (
          <LoaderDiv>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <H dark={dark}>No Search Results Found</H>
            <P dark={dark}>
              Try dufferent keywords or remove the search filter.
            </P>
          </LoaderDiv>
        )
      }}
    </ReactContext.Consumer>
  )

  appendVideos = () => {
    const {videos} = this.state
    return (
      <Ul>
        {videos.map(i => (
          <VideoCard details={i} key={i.id} />
        ))}
      </Ul>
    )
  }

  success = () => {
    const {videos} = this.state
    const vlen = videos.length
    return <>{vlen === 0 ? this.noresults() : this.appendVideos()}</>
  }

  appendDetails = () => {
    const {status} = this.state
    switch (status) {
      case 'Loading':
        return this.loader()
      case 'Failed':
        return this.failed()
      case 'Success':
        return this.success()
      default:
        return <></>
    }
  }

  search = event => {
    this.setState({searchq: event.target.value})
  }

  setSearch = event => {
    console.log(event.key)
    if (event.key === 'Enter') {
      const {searchq} = this.state
      this.setState({search: searchq}, this.fetchData)
    }
  }

  btnSetSearch = () => {
    const {searchq} = this.state
    this.setState({search: searchq}, this.fetchData)
  }

  render() {
    const {searchq} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <>
              <Searchdiv>
                <Search
                  type="search"
                  placeholder="Search"
                  value={searchq}
                  onChange={this.search}
                  onKeyDown={this.setSearch}
                />
                <SearchIcon dark={dark} onClick={this.btnSetSearch}>
                  <IoSearchSharp />
                </SearchIcon>
              </Searchdiv>
              {this.appendDetails()}
            </>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Videos
