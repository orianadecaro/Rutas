import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';

import styles from './styles';
import About from './screens/about';
import Home from './screens/home';
import Topics from './screens/topics';
import Images from './screens/Images';
import NavigationBar from './components/navigationBar';

export default function App() {
  return (
    <NativeRouter>
    <StatusBar/>
      <View style={styles.container}>
      <NavigationBar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/images" component={Images} />
      </View>
    </NativeRouter>
  );
}








