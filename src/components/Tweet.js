import React from "react";

const Tweet = (props) => {
    const tweetDate = "24/06/2001";
    return(
        <div className="tweet">
            <h2>Name: {props.name}</h2>
            <h3>{props.message}</h3>
            <button>Delete</button>
             <button>Like</button>
        </div>
        );
};

export default Tweet;