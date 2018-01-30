import axios from 'axios';

const githubUserUrl = 'https://api.github.com';
const githubAllUserUrl = 'https://api.github.com/users?since=135';

export const getAllUsers = () => {
    return axios.get(githubAllUserUrl);
};

export const getUser = (username) => {
    return axios.get(`${githubUserUrl}/users/${username}`)

};

export const getAdditionalInfo = (url)=> {
    return axios.get(url)
};
