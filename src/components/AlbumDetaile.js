import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CaardSection';

const AlbumDetaile  = ({data}) => {
    const {textHeaderSection, artistImage }= styles;
    const {name, artist, image} = data;
    
    return (
        <Card>
            <CardSection>
                 <View>
                     <Image 
                        style = {artistImage}
                        source={{uri: image[0][Object.keys(image[3])[0]]}}

                     />

                </View>
                 <View style={ textHeaderSection }> 
                    <Text>{ name }</Text>
                    <Text>{ artist }</Text> 
                 </View>     
                    
            </CardSection>
        </Card>
    )
}

const styles = {
    textHeaderSection : {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    artistImage : {
        width:50,
        height:50
    }
};
export default AlbumDetaile;

// 