import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleIntialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {

  //invoking our handledataintialcreator
  componentDidMount() {
    this.props.dispatch(handleIntialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar/>
      <div className = 'container'>
        
        
        <Nav/>
        {
          
          this.props.loading === true
          ? null
          : <div>
               <Route path = '/' exact component = {Dashboard}/>
               <Route path = '/tweet/:id'  component = {TweetPage}/>
               <Route path = '/new' component = {NewTweet}/>
            </div>
        }
        
      </div>
      </Fragment>
      </Router>
    )
  }
}
// inorder to get access to dispatch  we connect

function mapStateToProps ({ authedUser }){
     return {
       //loading will be true if authuser is null
       loading: authedUser === null
     }
}
export default connect(mapStateToProps)(App) 