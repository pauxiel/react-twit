import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
    render() {
         console.log(this.props);

        return (
            <div>
                <h3 className = 'center'>Your Timeline</h3>
                <ul className = "dashboard-list">
                    {this.props.tweetIds.map((id) => (

                        <li key = {id}>
                            <Tweet id = {id}/>

                        </li>
                    ))}

                </ul>

                
            </div>

            
        )
    }
}

//The results of mapStateToProps must be a plain object, which will be merged into the component’s props.
//If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
//If this argument is specified, the new component will subscribe to Redux store updates.
//This means that any time the store is updated, mapStateToProps will be called.

//it takes the state of our store
//it return an object that has a tweetids

function mapStateToProps ({ tweets }) {
    return {
        //grabbing all the fiffrent ids of our tweet and then call sort so they are all sorted by
        //their timestamp
        tweetIds: Object.keys(tweets)
         .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);