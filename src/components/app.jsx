import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'rEuDYlhmqOIxyLOj1KvbbqLpufRHPPUy';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null //"l0K4gEmkoSqdDTK6Y"
    }

    this.search('homer thinking');
  }

  search = (query) => {
    // API call
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });

  }

  render() {
    // const gifs = [
    //   { id: 'l0K4gEmkoSqdDTK6Y' },
    //   { id: 'kVaj8JXJcDsqs' }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
