import React from "react";

const Tweet = ({name, tweet, tweets, setTweets}) => {
    const tweetDate = "24/06/2001";
    const deleteTweet = () => {
        setTweets(tweets.filter((t) => t !== tweet))
    }
    return(
        <div className="tweet">
            <h2>Name: {name}</h2>
            <h3>{tweet}</h3>
            <button onClick={deleteTweet}>Delete</button>
             <button>Like</button>
        </div>
        );
};

export default Tweet;