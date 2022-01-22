import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.View}>
                <Text style={styles.text}>
                    Corona app
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight - 10,
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
