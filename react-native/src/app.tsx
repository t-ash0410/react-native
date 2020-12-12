import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from './shared/header';

export default function App() {
    return (
        <View style={styles.container}>
            <AppHeader />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
