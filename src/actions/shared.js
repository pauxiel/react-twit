import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthedUser } from '../actions/authedUser';
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

// All our action creator
//the function is going to use redux return pattern (asyn req)
export function handleIntialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        // an object that has users and tweet properties
        .then(({users, tweets}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
        //we will take our users and tweets and add them to the state of our redux store

    }
}