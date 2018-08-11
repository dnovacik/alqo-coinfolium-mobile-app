import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header  = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Coinfolium</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 55,
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
});