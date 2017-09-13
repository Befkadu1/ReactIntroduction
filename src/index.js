import _ from 'lodash';
import React , { Component }from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/vidio_detail';

/* ****************
Steps to get API_KEY
1. Navigate: https://console.developers.google.com/
2. Navigate Menu(top left) -> APIs & services
3. Navigate Library -> Select Youtube APIs -> YouTube Data API
4. Enable the dashboard
5. Navigate-> credentials
6. Create
7. Copy the key
 ******************/
const API_KEY = 'AIzaSyCiVhX9fm208KSCCw47_hxvSgwtf-VVFmY';



// Class based component
class App extends Component {

    constructor(props) {
      super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.videoSearch('Ethiopia');

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos}/>
            </div>)
    }
}


// Create a new component to produce Html
// Functional based component bc it doesn't have any concept of the state

/*const App = () => {
    return (<div>
        <SearchBar/>
    </div>)
}*/

// Take the component and generate html, put it on the DOM
ReactDom.render(<App/>, document.querySelector('.container'));