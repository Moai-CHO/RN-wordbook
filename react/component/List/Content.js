import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from '../../styles/listStyle';

const Content = ({array}) => {
    return (
        <View>
            <ScrollView style={{backgroundColor: '#f0f0f0',}}>
                {array.map((data, index) => {
                    return (
                        <View style={styles.list}>
                            <Text style={styles.word}>{data.word}</Text>
                            <Text>{data.mean}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Content;
