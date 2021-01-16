import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Splash,
  WelcomeAuth,
  Register,
  Home,
  Notifikasi,
  Surat,
  Disposisi,
  EditJadwal,
  TodoDetail,
} from '../pages';
import messaging from '@react-native-firebase/messaging';
// import WelcomeAuth from '../pages/WelcomeAuth';

const Stack = createStackNavigator();

const Router = () => {
  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        remoteMessage.data
      );
    });
  }, []);
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Surat"
        component={Surat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditJadwal"
        component={EditJadwal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Disposisi"
        component={Disposisi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TodoDetail"
        component={TodoDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
