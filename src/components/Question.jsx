import { useLocation } from "react-router";
import { useState } from "react";

function Question() {
    const location = useLocation();
    const { questions } = location.state || { questions: [] }; // Get filtered questions by useLocation
    const [clicked, setClicked] = useState({});

    const clickHandler = (e, answerId, questionId) => {
            setClicked((prev) => ({
                ...prev,
                [questionId]: answerId,
            }))
    }

    return (
        <div className="w-[34.375rem] ml-[4.69rem] p-0">
            {
                questions.map((question, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-[#293264] ml-[4.69rem] mb-5 mt-[5rem] text-[1rem] font-[700] Karla">
                            {question.question}
                        </h3>

                        {question.answersArray && (
                            <ul className="flex ml-[4.69rem] gap-5">
                                {question.answersArray.map((answer) => (
                                    <li
                                    key={answer.id}
                                    >
                                        <button
                                            type="button"
                                            className={`rounded-[2rem] border-[#4D5B9E] border-[1px] w-[160.922px] h-[39.65px] ${clicked[question.id] === answer.id
                                            ? "bg-[#D6DBF5]"
                                            : "bg-[#F5F7FB]"
                                            } flex items-center justify-center text-center break-words px-2`}
                                            onClick={(e) => clickHandler(e, answer.id, question.id) }
                                        >
                                            <span className="Inter text-[10.24px] font-[400] leading-normal">{answer.answer}</span>
                                           
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
