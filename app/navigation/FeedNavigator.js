import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OverviewScreen from '../screens/OverviewScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import AppNavigator from './AppNavigator';


const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Overview" component={OverviewScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

export default FeedNavigator; 

