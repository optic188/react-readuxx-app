import {
    getUser,
    getAllUsers,
    getAdditionalInfo
} from '../axios';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCESS = 'LOAD_USER_SUCESS';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCESS = 'LOAD_USERS_SUCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export const GET_ADDITIONAL_USER_INFO = 'GET_ADDITIONAL_USER_INFO';
export const GET_ADDITIONAL_USER_INFO_SUCESS = 'GET_ADDITIONAL_USER_INFO_SUCESS';
export const GET_ADDITIONAL_USER_INFO_REPOS_SUCESS = 'GET_ADDITIONAL_USER_INFO_REPOS_SUCESS';
export const GET_ADDITIONAL_USER_INFO_FOLLOWERS_SUCESS = 'GET_ADDITIONAL_USER_INFO_FOLLOWERS_SUCESS';
export const GET_ADDITIONAL_USER_INFO_ERROR = 'GET_ADDITIONAL_USER_INFO_SUCESS_ERROR';

export const getUserInfo = (params) => {
    return dispatch => {
        dispatch({type: LOAD_USER});
        getUser(params).then((resp) => {
            console.log(resp.data);
            dispatch({type: LOAD_USER_SUCESS, payload: resp.data})
        })
            .catch((err) => {
                dispatch({type: LOAD_USER_ERROR, payload: err})
            });

    }
};

export const getAllUsersInfo = () => {
    return dispatch => {
        getAllUsers().then((resp) => {
            console.log(resp.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }
};

export const getAdditionalUserInfo = (params) => {
    return dispatch => {
        dispatch({type: GET_ADDITIONAL_USER_INFO});

        getAdditionalInfo(params.repos_url).then((resp) => {
            dispatch({type: GET_ADDITIONAL_USER_INFO_REPOS_SUCESS, payload: resp.data});
            return getAdditionalInfo(params.followers_url)

        }).then((resp) => {
            dispatch({type: GET_ADDITIONAL_USER_INFO_FOLLOWERS_SUCESS, payload: resp.data});

        }).catch((err) => {
            dispatch({type: GET_ADDITIONAL_USER_INFO_ERROR, payload: err})

        })
    }
};