import React, { Component } from 'react'
import ReactDom from 'react-dom'
import SearchBar from './components/SearchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import * as Configs from './configs'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('Domowe Melodie Grażka Woodstock')
  }

  videoSearch(term) {
    if (Configs.YT_API_KEY.length === 0) {
      console.log("GET YOUR YT API KEY")
      return
    }
    YTSearch({ key: Configs.YT_API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('container'))