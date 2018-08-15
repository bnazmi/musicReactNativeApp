// /** @format */
// Import libary
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName, displayName as headerAppName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component 

const App = () => 
    (
        <View>
            <Header headerText={headerAppName} />
            <AlbumList />
        </View>
 
    );

// render the component

AppRegistry.registerComponent(appName, () => App);
