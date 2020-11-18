import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

export default function users (state = {}, action ) {
    switch(action.type) {
        case RECEIVE_TWEETS: 
        // return a object with state, and action.tweet
        return {
            ...state,
            ...action.tweets
        }

        case TOGGLE_TWEET:

        return {
             //spread all of the previous tweets on the state. it return a brand new object
            //spread all previous tweet on that object
            ...state,
            //take all the properties of that object and spread it into the new object
             [action.id]: {
                   ...state[action.id],
                   //if
                   likes: action.hasLiked === true
                   //then filrer out the authed user from the likes
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        //if they havent
                        : state[action.id].likes.concat([action.authedUser])
             }
        }
            case ADD_TWEET: 

            //grabbing the tweet of the action
            const { tweet } = action;

            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                 replyingTo = {
                     [tweet.replyingTo]: {
                         ...state[tweet.replyingTo],
                         replies: state[tweet.replyingTo].replies.concat([tweet.id])
                     }
                 }
            }
               return {
                   ...state,
                   [action.tweet.id]: action.tweet,
                  ...replyingTo

               }

            //the tweet of the id

        default:
            return state
    }
}