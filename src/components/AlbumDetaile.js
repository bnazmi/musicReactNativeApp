import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CaardSection';
import Button from './Button';

const AlbumDetaile  = ({data}) => {
    const {
        textHeaderSection, 
        artistImage, 
        albumImage, 
        artistImageContainer, 
        albumTitle 
    }= styles;
    const {title, artist, thumbnail_image, image,url} = data;
    
    return (
        <Card>
            <CardSection>
                <View style = {artistImageContainer}>
                     <Image 
                        style = {artistImage}
                        source={{uri: thumbnail_image}}

                     />

                </View>
                <View style={ textHeaderSection }> 
                    <Text style={albumTitle}>{ title }</Text>
                    <Text>{ artist }</Text> 
                </View>     
                    
            </CardSection>

            <CardSection>
                <Image 
                    style = {albumImage}
                    source={{uri:image}}
                />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    textHeaderSection : {
        flexDirection: 'column',
        justifyContent: 'space-around',
        
    },
    albumTitle : {
        fontSize: 18
    },
    artistImage : {
        width:50,
        height:50
    },
    artistImageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImage : {
        width: null,
        flex:1,
        height:300
    }
};
export default AlbumDetaile;

// 