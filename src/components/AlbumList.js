import React , { Component } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetaile from './AlbumDetaile';

class AlbumList extends Component{
    state = { albums:[] };
    componentWillMount(){
        console.log('aaaaaaaaa');
        // debugger;
        axios.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=a4e7f14385fcf0448c9693394bd04c0e&format=json')
        // .then(response => this.setState({ albums:response.data.results.tracks.track }))
        .then(console.log(response.data))


    }

    renderAlbumes() {
        return this.state.albums.map( album => <AlbumDetaile  key={album.name} data={album} />);
    }

    render() {
        console.log(this.state)
        return (
            <View>
                {this.renderAlbumes()}
            </View>
        )
   }
}

export default AlbumList;