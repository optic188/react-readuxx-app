import {
    LOAD_USER,
    LOAD_USER_SUCESS,
    LOAD_USER_ERROR,
    GET_ADDITIONAL_USER_INFO,
    GET_ADDITIONAL_USER_INFO_SUCESS,
    GET_ADDITIONAL_USER_INFO_ERROR,
    GET_ADDITIONAL_USER_INFO_FOLLOWERS_SUCESS,
    GET_ADDITIONAL_USER_INFO_REPOS_SUCESS

} from '../actions';

const initialState = {
    isLoading: false,
    user: {},
    userinfoAdditional: {
        repos: [],
        followers: []
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case  LOAD_USER:
        case GET_ADDITIONAL_USER_INFO:
            return {...state, isLoading: true};
        case  LOAD_USER_SUCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                userinfoAdditional: {
                    repos: [],
                    followers: []
                }
            };
        case GET_ADDITIONAL_USER_INFO_REPOS_SUCESS:
            return {
                ...state,
                userinfoAdditional: {
                    followers: state.userinfoAdditional.followers,
                    repos: [...action.payload],

                },

                isLoading: false
            };
        case GET_ADDITIONAL_USER_INFO_FOLLOWERS_SUCESS:
            return {
                ...state,
                userinfoAdditional: {
                    followers: [...action.payload],
                    repos: state.userinfoAdditional.repos

                },
                isLoading: false
            };
        case GET_ADDITIONAL_USER_INFO_ERROR:
        case LOAD_USER_ERROR:
            return {
                ...state,
                isLoading: false
            };
        default:
            return {...state, ...initialState}
    }
}


