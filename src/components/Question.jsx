import { useLocation } from "react-router";
import { useState } from "react";

function Question() {
  const location = useLocation();
  const { questions } = location.state || { questions: [] }; // Get filtered questions by useLocation
  const [clicked, setClicked] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const clickHandler = (e, answerId, questionId, isCorrect) => {
    setClicked((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
    if(isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
        console.log(`Teisingas atsakymas`)
    } else {
        return "Neteisingai"
    }
  };

  return (
    <div className="ml-[4.69rem] w-[550px] p-0">
      {questions.map((question, index) => (
        <div key={index} className="">
          <h3 className="text-[#293264] ml-[4.69rem] mb-5 mt-[5rem] text-[1rem] font-[700] Karla">
            {question.question}
          </h3>

          {question.answersArray && (
            <ul className="flex ml-[4.69rem] gap-5">
              {question.answersArray.map((answer) => (
                <li key={answer.id}>
                  <button
                    type="button"
                    className={`rounded-[2rem] border-[#4D5B9E] border-[1px] w-[180.922px] h-[39.65px] ${
                      clicked[question.id] === answer.id
                        ? "bg-[#D6DBF5]"
                        : "bg-[#F5F7FB]"
                    } flex items-center justify-center text-center break-words px-2`}
                    onClick={(e) => clickHandler(e, answer.id, question.id, answer.isCorrect)}
                  >
                    <span className="Inter text-[10.24px] font-[400] leading-normal">
                      {answer.answer}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="ml-[425px] mt-5 mb-5">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[120px] h-[35px] rounded-full">
        <span className="Inter text-[10.24px] text-center">Check answers</span>
      </button>
      </div>
      <div>
        <p>Correct answers {correctAnswers}</p>
      </div>
    </div>
  );
}

export default Question;
