import React from 'react';
import Enzyme, {mount} from 'enzyme'
import Home from '../containers/home';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux'


Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore();
const store = mockStore();
const homeComponent = mount(<Provider store={store}><Home /></Provider>);

describe('test Home component', () => {
    test('renders correct ', () => {
        expect(homeComponent.find('.searchInput').hasClass('searchInput')).toBe(true);
        expect(homeComponent.find('.btn').hasClass('btn')).toBe(true);
    });

});
