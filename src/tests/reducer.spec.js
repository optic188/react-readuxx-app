import reducer from '../reducers';
import * as actions from '../actions';
import expect from 'expect';
const initialState = {
    reducer:{
        isLoading: false,
        user: {},
        userinfoAdditional: {
            repos: [],
            followers: []
        },
    },
        router: {
            location: null
        }
};
describe('reducer',()=>{
    it('should return initial state', ()=>{
        expect(reducer(undefined, {})).toEqual(initialState)
    });
    it('should handle LOAD_USER_SUCESS action',()=>{
        expect(
            reducer(initialState, {
                type: actions.LOAD_USER_SUCESS,
                payload: {}
            })).toEqual(initialState);

    });

});