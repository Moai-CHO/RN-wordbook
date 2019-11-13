import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';


import ListTab from './TabNavigator/ListTab';
import SearchTab from './TabNavigator/SearchTab';

const AppTabNavigator = createMaterialTopTabNavigator(
    {
        List: {screen: ListTab},
        SearchTab: {screen: SearchTab},
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white',
                    },
                }),
            },
            iconStyle: {height: 100},
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            upperCaseLabel: false,
            // showLabel: false,
            showIcon: true,
        },
    },
);

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

    // navigationOptions 코드 추가
    static navigationOptions = {
        headerLeft:
            <Button
                title={'asd'} style={{marginLeft: 10}} onPress={() => Alert.alert('ddd')}/>,
        title: 'WordBook',
        // headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
        // headerRight: <Button title={'right'} style={{paddingRight: 10}}></Button>,
        headerRight: <Button title={'right'} style={{marginRight: 10}}/>,
    };

    render() {
        return <AppTabContainet/>;
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// export default MainScreen;
