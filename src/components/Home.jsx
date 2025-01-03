import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getAll, getCategories } from "../helpers/get";

function Home() {
    const [questions, setQuestions] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectDifficulty, setSelectDifficulty] = useState([]);

    // Function makes answers from object to array and add true answer information
    const AnswersFromObject = (question) => {
        const answersArray = [];
        for (const key in question.answers) {
            if (question.answers[key] !== null) {
                answersArray.push({
                    id: key,
                    answer: question.answers[key],
                    isCorrect: question.correct_answers[`${key}_correct`] === "true",
                });
            }
        }
        return answersArray;
    };

    // Get all questions
    const getAllQuestions = async () => {
        const response = await getAll();
        const questionsWithAnswers = response.map((question) => ({
            ...question,
            answersArray: AnswersFromObject(question),
        }));
        setQuestions(questionsWithAnswers);
        const difficulties = [...new Set(response.map((q) => q.difficulty))];
        setSelectDifficulty(difficulties);
    };

    // get categories
    const getCategoriesAPI = async () => {
        const response = await getCategories()
        setCategories(response);
    }
    
    const onOptionSelect = (e) => {
        setSelectedCategories(e)
        console.log(e);
    }

    useEffect(() => {
        getAllQuestions();
        getCategoriesAPI();
        onOptionSelect();
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-[#293264] Karla font-bold leading-normal text-center text-[31.25px]">
                    Quizzical
                </h1>
                <p className="Inter text-[#293264] text-center not-italic font-normal leading-normal mb-5">
                    Some description if needed
                </p>
            </div>

            {/* Difficulty */}
            <div className="mb-5">
                <form className="max-w-sm mx-auto">
                    <select
                        id="difficulty"
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="">Select Difficulty</option>
                        {selectDifficulty.map((difficulty, index) => (
                            <option key={index} value={difficulty}>
                                {difficulty}
                            </option>
                        ))}
                    </select>
                </form>
            </div>

            {/* Category */}
            <div className="mb-5">
                <form className="max-w-sm mx-auto">
                    <select
                        id="categories"
                        onChange={(e) => onOptionSelect(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category.name}</option>
                        ))}
                    </select>
                </form>
            </div>

            {/* Questions when press "Start Quiz" */}
            <div className="text-center">
                <Link to="/question" state={{ questions: questions }}>
                    <button
                        type="button"
                        className="text-white w-[193px] h-[52px] bg-[#4D5B9E] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[16px] px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Start Quiz
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
