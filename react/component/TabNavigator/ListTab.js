import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


// import Header from '/react/component/List/Header';
import Header from '../List/Header';
import Content from '../List/Content';
import styles from '../../styles/listStyle';
// import Header from 'react/component/List/Header';
// export default class ListTab extends Component {

const contentArray = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
const contentArray2 = [
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
    {
        word: '단어1',
        mean: '뜻2',
    },
];
const ListTab = () => {
    return (
        <View >
            <View style={styles.container}>
                <Header/>
            </View>
            <View>
                <Content array={contentArray2}/>
            </View>
        </View>
    );
};


export default ListTab;
