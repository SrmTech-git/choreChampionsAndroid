import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserPickerScreen } from '../screens/UserPickerScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { RootStackParamList } from './types';
import { colors } from '../utils/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'fade',
      }}
    >
      <Stack.Screen name="UserPicker">
        {({ navigation }) => (
          <UserPickerScreen
            onUserSelected={() => navigation.navigate('Dashboard')}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Dashboard">
        {({ navigation }) => (
          <DashboardScreen
            onSwitchUser={() => navigation.navigate('UserPicker')}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
