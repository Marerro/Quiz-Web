import { useLocation } from "react-router"
import { Link } from "react-router";

function Answers() {
    const location = useLocation();
    const { questions, clicked, correctAnswers } = location.state || { questions: [], clicked: {}, correctAnswers: 0 };

    return (
        <>
            {questions.map((question, index) => (
                <div key={index}
                className={`text-center ${index === 0 ? "mt-[50px]" : "mt-0"}`}>
                    <h3 className="text-[#293264] ml-auto mr-auto mb-5 text-[1rem] font-[700] Karla">
                        {question.question}
                    </h3>

                    {question.answersArray && (
                        <ul className="flex justify-center gap-5">
                            {question.answersArray.map((answer) => (
                                <li key={answer.id}>
                                    <button
                                        className={`rounded-[2rem] border-[#4D5B9E] border-[1px] w-[180.922px] h-[39.65px] ${clicked?.[question.id] === answer.id
                                                ? answer.isCorrect
                                                    ? "bg-[#94D7A2]"
                                                    : "bg-[#F8BCBC]"
                                                : "bg-[#F5F7FB]"
                                            } flex items-center justify-center text-center break-words px-2`}
                                    >
                                        <span className="Inter text-[10.24px] font-[400] leading-normal">
                                            {answer.answer}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {index >= 0 && <hr className="my-[50px] mx-auto w-2/4 border-gray-300" />}
                </div>
            ))}

            <div className="flex justify-center mb-5 gap-3 h-[55px] items-center">
                <p className="text-center Inter text-[#293264] font-[700]">You scored {correctAnswers}/{questions.length} correct answers</p>
                <Link to="/question" state={{ questions: questions }}>
                <button
                type="button"
                className="g-blue-500 bg-blue-700 text-white font-bold w-[120px] h-[35px] rounded-full"
                >Play again</button>
                </Link>
            </div>
        </>
    )
}

export default Answers