import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import styles from '../../styles/listStyle'

const Header = () => {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Text>123단어</Text>
                <Text>설명</Text>
            </View>
            <View>
                <Text style={styles.title}>Title</Text>
            </View>

        </View>
    );
};


export default Header;
