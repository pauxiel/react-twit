import { saveLikeToggle, saveTweet } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS"

export const TOGGLE_TWEET = "TOGGLE_TWEET"

export const ADD_TWEET = "ADD_TWEET"

function addTweet (tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

// creating our asynchoronus action creator

export function handleAddTweet (text, replyingTo) {
    //usin the getstate so we can invoke the current state of our store
       return (dispatch, getState) => {
            const { authedUser } = getState()
       
            dispatch(showLoading())

            return saveTweet({
                text,
                author: authedUser,
                replyingTo

            })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()))
       
        }
}



export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweet ({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

//creating our asynchronus action creator responsibele
//for invoking our savetoggle

export function handleToggleTweet(info) {
      return (dispatch) => {
          //dispatching to ui
          dispatch(toggleTweet(info))
           
          //saving it to database
          return saveLikeToggle(info)
          .catch((e) => {
              console.warn('Error in handleToggleTweet: ', e)
              dispatch(toggleTweet(info))
              alert('The was anerror liking the tweet. Try again')
          })
      }
}
