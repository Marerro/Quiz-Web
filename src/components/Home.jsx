import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getAll } from "../helpers/get"

function Home() {
    const [questions, setQuestions] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [filteredQuestions, setFilteredQuestions] = useState([]);

    // Get all questions
    const getAllQuestions = async () => {
        const response = await getAll(); 
        console.log(response);
        setQuestions(response);
    };

    // Filter by what user select
    const checkSelect = () => {
        if (selectedCategories && difficulty) {
            const filtered = questions.filter(
                (question) =>
                    question.category === selectedCategories &&
                    question.difficulty === difficulty
            );
            setFilteredQuestions(filtered);
        }
    };

    
    useEffect(() => {
        getAllQuestions();
    }, []);

    
    useEffect(() => {
        checkSelect();
    }, [selectedCategories, difficulty, questions]);

    return (
        <div>
            <div>
                <h1 className="text-[#293264] Karla font-bold leading-normal text-center">
                    Quizzical
                </h1>
                <p className="Inter text-[#293264] text-center not-italic font-normal leading-normal">
                    Some description if needed
                </p>
            </div>

            {/* difficulty */}
            <div className="mb-5">
                <form className="max-w-sm mx-auto">
                    <select
                        id="difficulty"
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="">Difficulty</option>
                        {[...new Set(questions.map((q) => q.difficulty))].map(
                            (difficulty, index) => (
                                <option key={index} value={difficulty}>
                                    {difficulty}
                                </option>
                            )
                        )}
                    </select>
                </form>
            </div>

            {/* Category */}
            <div className="mb-5">
                <form className="max-w-sm mx-auto">
                    <select
                        id="categories"
                        onChange={(e) => setSelectedCategories(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="">Category</option>
                        {[...new Set(questions.map((q) => q.category))].map(
                            (category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            )
                        )}
                    </select>
                </form>
            </div>

            {/* Questions when press "Start Quiz" */}
            <div className="text-center">
                <Link to="/question" state={{ questions: filteredQuestions }}>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Start Quiz
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
