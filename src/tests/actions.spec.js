
import * as actions from '../actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';


describe('actions', ()=> {
    it('Should create sync actions ', ()=> {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const url = 'https://api.github.com/users/john';
        const expectedActions = [
            {type: actions.LOAD_USER}
        ];
        const store = mockStore( {
            isLoading: false,
            user: {},
            userinfoAdditional: {
                repos: [],
                followers: []
            }
        });
         store.dispatch(actions.getUserInfo(url));
            expect(store.getActions()).toEqual(expectedActions);


    })
});