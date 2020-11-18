import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component{
     
    state = {
        text: '',
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state 
        const { dispatch, id } = this.props

           
        dispatch(handleAddTweet(text, id))

        // console.log('New Tweet: ', text )

        this.setState(() =>({
             text: '',
             //if we replying a tweet stay on the view but if not go to home
              toHome : id ? false : true
            }))



    }

    render()  {

        const { text, toHome } = this.state

        if (toHome === true) {
            return <Redirect to = '/'/>
        }

        const tweetLeft = 280 - text.length

        return (
            <div>
                <h3 className = 'center'>Compose Tweet</h3>
                <form className = 'new-tweet' onSubmit = {this.handleSubmit}>
                    <textarea 
                    placeholder = "What's happening?"
                    value = {text}   
                    onChange = {this.handleChange} 
                    className = 'textarea'
                    maxLength = {280}
                          ></textarea>
                       {tweetLeft <= 100 && (
                           <div className = 'tweet-length'>
                                  {tweetLeft}
                           </div>
                       )}  

                       <button 
                       className = 'btn' 
                       type = 'submit'
                       disabled = {text === ''}
                       >
                             Submit
                           </button> 
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);