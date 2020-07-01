import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import OverviewScreen from '../screens/OverviewScreen';
import MessageScreen from '../screens/MessagesScreen';





const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen}/>
        {/* <Stack.Screen name="Overview" component={OverviewScreen} /> */}
        <Stack.Screen name="Overview" component={OverviewScreen} />
    </Stack.Navigator>
)

export default AccountNavigator; 

