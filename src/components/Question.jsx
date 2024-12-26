import { useLocation } from "react-router";

function Question() {
    const location = useLocation();
    const { questions } = location.state || { questions: [] }; // Get filtered questions by useLocation

    return (
        <div>
            <h1>Quiz Questions</h1>
            {questions.length > 0 ? (
                questions.map((question, index) => (
                    <div key={index}>
                        <h3>{question.question}</h3>
                    </div>
                ))
            ) : (
                <p>No questions available.</p>
            )}
        </div>
    );
}

export default Question;
