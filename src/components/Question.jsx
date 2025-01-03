import { useLocation } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

function Question() {
  const location = useLocation();
  const { questions } = location.state || { questions: [] }; // Get filtered questions by useLocation
  const [clicked, setClicked] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const clickHandler = (e, answerId, questionId, isCorrect) => {
    const previousAnswer = clicked[questionId]; 
    const wasCorrect = questions
      .find((q) => q.id === questionId)
      ?.answersArray.find((ans) => ans.id === previousAnswer)?.isCorrect;
  
    setClicked((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  
    if (previousAnswer !== undefined) {
      if (wasCorrect) {
        setCorrectAnswers((prev) => prev - 1);
      }
    }
  
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      console.log("Teisingas atsakymas");
    } else {
      console.log("Neteisingas atsakymas");
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-0">
      {questions.map((question, index) => (
        <div
          key={index}
          className={`text-center ${index === 0 ? "mt-[50px]" : "mt-0"}`}
        >
          <h3 className="text-[#293264] mb-5 text-[1rem] font-[700] Karla">
            {question.question}
          </h3>

          {question.answersArray && (
            <ul className="flex justify-center gap-5">
              {question.answersArray.map((answer) => (
                <li key={answer.id}>
                  <button
                    type="button"
                    className={`rounded-[2rem] border-[#4D5B9E] border-[1px] w-[190.922px] h-[49.65px] ${
                      clicked[question.id] === answer.id
                        ? "bg-[#D6DBF5]"
                        : "bg-[#F5F7FB]"
                    } flex items-center justify-center text-center break-words px-2`}
                    onClick={(e) =>
                      clickHandler(e, answer.id, question.id, answer.isCorrect)
                    }
                  >
                    <span className="Inter text-[10px] font-[500] leading-normal">
                      {answer.answer}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}


          {index >= 0 && (
            <hr className="my-[50px] mx-auto w-3/4 border-gray-300" />
          )}
        </div>
      ))}

      <div className="flex justify-center mt-5 mb-5">
        <Link
          to="/answers"
          state={{
            questions: questions,
            clicked: clicked,
            correctAnswers: correctAnswers,
          }}
        >
          <button className="g-blue-500 bg-blue-700 text-white font-bold w-[190px] h-[45px] rounded-full">
            <span className="Inter text-center">
              Check answers
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Question;