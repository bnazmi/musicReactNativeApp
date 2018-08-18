import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, textButton}=styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textButton}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textButton : {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color:'#007aff',
        paddingBottom: 5,
        paddingTop: 5,

    },
    buttonStyle : {
        flex:1,
        alignSelf: 'stretch',
        borderColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}
export default Button;