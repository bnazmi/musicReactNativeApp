// /** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';


// AppRegistry.registerComponent(appName, () => App);

// Import libary
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName, displayName as headerAppName } from './app.json';
import Header from './src/components/header';

// Create component 

const App = () => 
    (
        <Header headerText={headerAppName} />
 
    );

// render the component

AppRegistry.registerComponent(appName, () => App);
