import axios from "axios";

export const getAll = async () => {
    const url = "https://quizapi.io/api/v1/questions";
    const response = await axios.get(url, {
        headers: {
            "X-Api-Key": "YOUR API KEY" // API KEY 
        }
    });
    return response.data;
};

console.log(getAll());