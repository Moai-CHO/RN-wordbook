import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// import Header from '/react/component/List/Header';
import Header from '../List/Header';
import Content from '../List/Content';
import styles from '../../styles/listStyle';
// import Header from 'react/component/List/Header';
// export default class ListTab extends Component {
const ListTab = () => {
        return (
            <View style={styles.container}>
                <Header />
                <Content array={['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']} />
            </View>
        );
}

export default ListTab;
