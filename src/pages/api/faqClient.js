import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/question';

export const getAllQuestions = () => axios.get(BASE_URL);

export const createQuestion = (newQuestion) => axios.post(BASE_URL, newQuestion);

export const deleteQuestion = (questionId) => axios.delete(BASE_URL + "/" + questionId);

// In faqClient.js
export const updateQuestion = (questionId, updatedQuestion) =>
    axios.put(`${BASE_URL}/${questionId}`, updatedQuestion);
