import axios from "axios";

export const getAll = async (difficulty) => {
    const url = "https://quizapi.io/api/v1/questions";
    const response = await axios.get(url, {
        headers: {
            "X-Api-Key": "7rSpj47h2M63zezQ3CEaU0hKyyMtqo7JGUF4F5Us", // API KEY 
        },
        params: {
            difficulty: difficulty,
        }

    });
    return response.data;
};

console.log(getAll());

export const getCategories = async () => {
    const url = "https://quizapi.io/api/v1/categories";
    const response = await axios.get(url, {
        headers: {
            "X-Api-Key": "7rSpj47h2M63zezQ3CEaU0hKyyMtqo7JGUF4F5Us",
        },
    });
    return response.data;
};

getCategories()
    .then((data) => console.log("Categories:", data))
    .catch((error) => console.error(error));
