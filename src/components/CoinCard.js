import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { CryptoIcons } from './../utils/CryptoIcons';
import { Currencies } from './../utils/Currencies';

const CoinCard = ({ticker, name, percent_24h_change, price, currency, imageSlug}) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <Image style={styles.image} source={CryptoIcons[imageSlug].uri} />
                <Text style={styles.coinSymbol}>{ticker}</Text>
                <Text style={styles.seperator}>|</Text>
                <Text style={styles.coinName}>{name}</Text>
                <Text style={styles.coinPrice}>{price.toFixed(5)}
                    <Text style={styles.moneySymbol}> {Currencies[currency.toUpperCase()]}</Text>
                </Text>
            </View>
            <View style={styles.statisticsContainer}>
                <Text>24h:
                     <Text style={percent_24h_change < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_24h_change} % </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",        
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",        
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

export default CoinCard;