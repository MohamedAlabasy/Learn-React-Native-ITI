// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import SingleNews from './Screens/SingleNews';
import Onboard from './Screens/Onboard';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{ // To hide Header from all screens
      //   headerShown: false
      // }}
      >
        {/* To hide Header from splash only */}
        <Stack.Screen options={{ headerShown: false, }} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false, }} name="Onboard" component={Onboard} />

        {/* To hide back in home  && mack it center*/}
        <Stack.Screen options={{ headerBackVisible: false, headerTitleAlign: 'center' }} name="Home" component={Home} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="SingleNews" component={SingleNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;