import React, {useState} from "react";
import Questions from "./Questions"
import data from "./data"

function App() {
    const [questions,
        setQuestions] = useState(data);
    console.log(questions)

    return (
        <main>
            <section className="container">
                <h3 className="title">questions and answers about login</h3>
                <article>
                    {questions.map(question => {
                        return <Questions key={question.id} {...question}/>
                    })}

                </article>
            </section>
        </main>
    );
}

export default App;
