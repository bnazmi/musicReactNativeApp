// import libary for making components
import React from 'react';
import { Text, View } from 'react-native';


// make a components 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle} > 
        <Text style={textStyle} > {props.headerText} </Text>
    </View>
);
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        paddingTop: 15,
        height: 60,
        justifyItems: 'center',    
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        position: 'relative',
        elevation: 2
      },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
};
// make the components avalible to other parts of the app 

export default Header;
