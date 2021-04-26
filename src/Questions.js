import React, {useState} from "react";
import {BiMinus, BiPlus} from "react-icons/bi";

const Questions = ({title, info}) => {
    const [showAnswer,
        setShowAnswer] = useState(false)
    return (
        <div className="single-qa">
            <div className="question-container">
                <h4 className="question">{title}</h4>
                <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer
                        ? <BiMinus/>
                        : <BiPlus/>}
                </button>
            </div>
            {showAnswer && <p className="answer">{info}</p>}
        </div>
    )
}

export default Questions;