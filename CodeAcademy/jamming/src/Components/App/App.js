import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
//import {search as spotifySearch, savePlaylist as spotifysavePlaylist} from '../../util/Spotify';
//savePlaylist
// import Spotify from '../../util/Spotify';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistName: 'New playlist',
      playlistTracks: [{
        album: "L'amour En France",
        artist: "Alain Chamfort",
        id: "5aFLrbiRTEaZuueEHNnhIZ",
        name: "Madona",
        uri: "spotify:track:5aFLrbiRTEaZuueEHNnhIZ"
      }],
      searchResults: [
      {
        album: "Recovery",
        artist: "Eminem",
        id: "15JINEqzVMv3SvJTAXAKED",
        name: "Love The Way You Lie",
        uri: "spotify:track:15JINEqzVMv3SvJTAXAKED"
      },
      {
        album: "Curtain Call",
        artist: "Eminem",
        id: "1dWimOlV5KUHDerWZVDv5l",
        name: "My Name Is",
        uri: "spotify:track:1dWimOlV5KUHDerWZVDv5l"
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const trackArray = this.state.playlistTracks.filter(current => current.id === track.id);
    if(!trackArray.length){
      let playlistTracks = this.state.playlistTracks;
      playlistTracks.push(track);
      this.setState({playlistTracks});
    }
  }

  removeTrack(track) {
    const trackArray = this.state.playlistTracks.filter(current => current.id === track.id);
    if(trackArray.length){
      let playlistTracks = this.state.playlistTracks;
      delete playlistTracks[this.state.playlistTracks.indexOf(track)];
      this.setState({playlistTracks});
    }
  }

  updatePlaylistName(playlistName) {
    this.setState({playlistName});
  }

  async savePlaylist() {

    const trackURIs = this.state.playlistTracks.map(track => track.uri).flat();
    await Spotify.savePlaylist(this.state.playlistName, trackURIs);
    // TODO add then?
    this.updatePlaylistName('New Playlist');
    this.setState({playlistTracks: []});
  }

  async search(term) {
    let searchResults = await Spotify.search(term);
    this.setState({searchResults});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
        <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
        <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
