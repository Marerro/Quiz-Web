import axios from "axios";

export const getAll = async () => {
    const url = "https://quizapi.io/api/v1/questions";
    const response = await axios.get(url, {
        headers: {
            "X-Api-Key": "7rSpj47h2M63zezQ3CEaU0hKyyMtqo7JGUF4F5Us" // API KEY 
        }
    });
    return response.data;
};

console.log(getAll());