import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/question';

export const getAllQuestions = () => axios.get(BASE_URL);