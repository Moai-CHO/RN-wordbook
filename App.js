import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Button,Alert,} from 'react-native';

import MainScreen from './react/component/MainScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AppStackNavigator = createStackNavigator({
    Main:{
        screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
    }
});

export default createAppContainer(AppStackNavigator);
