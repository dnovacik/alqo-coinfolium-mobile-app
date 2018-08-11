import axios from 'axios';
import { cmcApiBase } from './../utils/Constants';
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../utils/ActionTypes';

export default function FetchCmcCoinData(currency) {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${cmcApiBase}/v1/cryptocurrency/listings/latest?limit=10&convert=${currency.toUpperCase()}`, {
            headers: {
                'X-CMC_PRO_API_KEY': ''
            }
        })
        .then(res => {
            dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
        })
    }
}