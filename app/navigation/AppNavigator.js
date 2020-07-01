import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverviewScreen from '../screens/OverviewScreen';
import AddInvoiceScreen from '../screens/AddInvoiceScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="Overview" 
        component={FeedNavigator} 
        options={{
            tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
        />
        <Tab.Screen 
        name="AddInvoice" 
        component={AddInvoiceScreen} 
        options={({ navigation })=> ({
            tabBarButton: () => <NewListingButton onPress={()=> navigation.navigate("AddInvoice")} />, 
            tabBarIcon: ({ color }) => 
            // <Image source={require('../assets/logo.png')}/>
            <MaterialCommunityIcons name="home" color={color} size={50} />
        })}
        />
        <Tab.Screen 
        name="Account" 
        component={AccountNavigator} 
        options={{
            tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
        />
    </Tab.Navigator>
)

export default AppNavigator;