import {shallow} from 'enzyme';
import React from 'react';
import UserInfo from '../components/UserInfo/UserInfo';

it('renders UserInfo without crashing', () => {
    const initialProps = {
        name: 'Ela',
        areTasks: true
    }
    let  wrapper = shallow(<UserInfo {...initialProps}/>);
    expect(wrapper).toMatchSnapshot();
});

it('renders UserInfo no task', () => {    
    const initialProps2 = {
        name: 'Ela',
        areTasks: false
    }
    let wrapper2 = shallow(<UserInfo {...initialProps2}/>);
    expect(wrapper2).toMatchSnapshot();
})