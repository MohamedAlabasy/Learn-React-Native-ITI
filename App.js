// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import SingleNews from './Screens/SingleNews';
import Onboard from './Screens/Onboard';
import Login from './Screens/Login';
import SingUp from './Screens/SignUp';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity, Image } from 'react-native'




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ // To hide Header from all screens
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#4a5cD0',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                alert('hel')
              }}
            >
              <Icon
                name='google'
                // type='evilicon'
                color='#fff'
                size={30}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                alert('hel')
              }
            >
              <Image
                source={require('./assets/logout.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          ),

        }}

      >
        {/* To hide Header from splash only */}
        < Stack.Screen options={{ headerShown: false, statusBarHidden: true }} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false, }} name="Onboard" component={Onboard} />

        <Stack.Screen options={{ headerBackVisible: false, headerTitleAlign: 'center' }} name="Login" component={Login} />
        {/* <Stack.Screen options={{ headerBackVisible: false, headerTitleAlign: 'center' }} name="SignUp" component={SingUp} /> */}

        {/* To hide back in home  && mack it center*/}
        <Stack.Screen options={{ headerBackVisible: false, headerTitleAlign: 'center' }} name="Home" component={Home} />
        <Stack.Screen options={{ headerTitleAlign: 'center' }} name="SingleNews" component={SingleNews} />
      </Stack.Navigator >
    </NavigationContainer >
  );
}

export default App;