import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from '../../styles/listStyle'

const Content = ({array}) => {
    return (
        <View>
            <ScrollView>
                {array.map((data, index) => {
                    return <Text>{index}</Text>;
                })}
            </ScrollView>
        </View>
    );
};

export default Content;
