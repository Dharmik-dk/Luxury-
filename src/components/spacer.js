import React from 'react'
import {View,StyleSheet} from 'react-native';


const Spacer = ({Children}) => {
return <View style={styles.spacer}>{Children}</View>
};

const styles = StyleSheet.create({
    spacer: {
        margin: 12
    }
});

export default Spacer;