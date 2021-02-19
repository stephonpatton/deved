import React, {useState} from "react";

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) => {
    //State


    //Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
    }
     const resetText = () => {
         setTextInput("");
     };

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea onChange={userInputHandler} value={textInput} cols="50" rows="5"></textarea>
            <button>Submit</button>
            <h1 onClick={() => resetText()}> {textInput} </h1>
            
        </form>
    );
};

export default CreateTweet;