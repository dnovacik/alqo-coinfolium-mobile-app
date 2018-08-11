import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCmcCoinData from './../actions/FetchCmcCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCmcCoinData(this.props.currency);
    }

    renderCoinCards() {
        const { crypto } = this.props;

        return crypto.response.data.map((coin, index) =>
            <CoinCard
                key={index}
                name={coin.name}
                ticker={coin.symbol}
                percent_24h_change={coin.quote[this.props.currency.toUpperCase()].percent_change_24h}
                price={coin.quote[this.props.currency.toUpperCase()].price}
                currency={this.props.currency}
                imageSlug={coin.slug}
            /> 
        );
    }

    render() {
        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade" />
                </View>
            );
        }
        return (
            <ScrollView>
                {this.renderCoinCards()}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCmcCoinData })(CryptoContainer)