import React , { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetaile from './AlbumDetaile';

class AlbumList extends Component{
    state = { albums:[] };
    componentWillMount(){
        console.log('aaaaaaaaa');
        // debugger;
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // .then(response => this.setState({ albums:response.data.results.tracks.track }))
        .then(response => this.setState( {albums: response.data}))


    }

    renderAlbumes() {
        return this.state.albums.map( album => <AlbumDetaile  key={album.title} data={album} />);
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbumes()}
            </ScrollView>
        )
   }
}

export default AlbumList;