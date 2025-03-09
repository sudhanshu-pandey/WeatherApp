import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenViewModel from '../viewModels/HomeScreenViewModel';
import {SCREENS} from '../shared/constants';
import SearchScreenViewModel from '../viewModels/SearchScreenViewModel';
import { isReadyRef, navigationRef } from '../services/navigation';
import DetailScreenViewModel from '../viewModels/DetailScreenViewModel';
import { RootStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false , animation: "none"}}>
        <Stack.Screen name={SCREENS.HOME as keyof RootStackParamList} component={HomeScreenViewModel} />
        <Stack.Screen name={SCREENS.SEARCH as keyof RootStackParamList} component={SearchScreenViewModel} />
        <Stack.Screen name={SCREENS.DETAIL as keyof RootStackParamList} component={DetailScreenViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
