import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListViewScreen from '../components/ListViewScreen';
import ImageDetailScreen from '../components/ImageDetailScreen';
import NextScreen from '../components/NextScreen';
import Tab2Screen1 from '../components/Tab2Screen1';
import Tab2Screen2 from '../components/Tab2Screen2';
import SplashScreen from '../components/SplashScreen';
import Icon from 'react-native-vector-icons/Entypo';

const Tab1StackNav = createNativeStackNavigator();
const Tab2StackNav = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab1Stack() {
  return (
    <Tab1StackNav.Navigator initialRouteName="SplashScreen">
      <Tab1StackNav.Screen
        name="Gallery"
        component={ListViewScreen}
        options={({navigation, route}) => ({
          headerTitle: '🅶🅰🅻🅻🅴🆁🆈',
          headerStyle: {backgroundColor: 'pink', borderWidth: '10'},
          //headerLeft: () => <Text>Hello</Text>,
          headerRight: () => (
            <TouchableOpacity
              style={{ borderRadius: 10,}}
              onPress={() => {
                navigation.navigate('Next Screen');
              }}>
              <Text style={{fontSize: 30}}>☛</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        })}
      />
      <Tab1StackNav.Screen
        name="Details"
        component={ImageDetailScreen}
        options={{headerStyle: {backgroundColor: 'pink'}}}
      />
      <Tab1StackNav.Screen
        name="Next Screen"
        component={NextScreen}
        options={{headerStyle: {backgroundColor: 'pink'}}}
      />
    </Tab1StackNav.Navigator>
  );
}

function Tab2Stack() {
  return (
    <Tab2StackNav.Navigator>
      <Tab2StackNav.Screen
        name="About Us"
        component={Tab2Screen1}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'pink'},
        }}
      />
      <Tab2StackNav.Screen
        name="Contact Us"
        component={Tab2Screen2}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'pink'},
        }}
      />
    </Tab2StackNav.Navigator>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        backgroundColor: 'pink',
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Image List"
        component={Tab1Stack}
        options={{
          tabBarIcon: () => {
           // console.log('Icon Applied');
            return <Icon name="folder-images"></Icon>;
          },
        }}
      />
      <Tab.Screen name="About" component={Tab2Stack} />
    </Tab.Navigator>
  );
}

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen name="HomeScreen" component={TabStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;
