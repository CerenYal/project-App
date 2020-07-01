import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Screen from './app/components/Screen';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OverviewScreen from './app/screens/OverviewScreen';

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })} />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white"
      }} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
    // options={ ({route}) => ({title: route.params.id}) }
    />
  </Stack.Navigator>
);

const Account = () =>
  <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor: "blue",
    activeTintColor: "white",
    inactiveBackgroundColor: "#eee",
    inactiveTintColor: "black"
  }}>
    <Tab.Screen 
    name="Feed" 
    component={FeedNavigator} 
    options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons  name="home" size={size} color={color}/>
    }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)
export default function App() {
  return (
    
    <NavigationContainer theme={ NavigationTheme }>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
