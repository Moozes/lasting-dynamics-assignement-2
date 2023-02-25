/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View, Text} from 'react-native';
import useHideSplashScreenOnMount from './src/hooks/useHideSplashScreenOnMount';

function App() {
  useHideSplashScreenOnMount()

  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
}

export default App;
