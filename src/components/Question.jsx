import { useLocation } from "react-router";

function Question() {
    const location = useLocation();
    const { questions } = location.state || { questions: [] }; // Get filtered questions by useLocation

    console.log(questions);
    return (
        <div className="w-[34.375rem] ml-[4.69rem] p-0">
            {questions.length > 0 &&
                questions.map((question, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-[#293264] ml-[4.69rem] mb-5 mt-[5rem] text-[1rem] font-[700] Karla">
                            {question.question}
                        </h3>

                        {question.answersArray && (
                            <ul>
                                {question.answersArray.map((answer) => (
                                    <li key={answer.id}>
                                        <button
                                            type="button"
                                        >
                                            {answer.answer}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default Question;
