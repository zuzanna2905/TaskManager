import {shallow} from 'enzyme';
import React from 'react';
import ListItem from '../components/ListItem/ListItem';

it('renders ListItem without crashing', () => {
    const initialProps = {
        value: 'clean room', 
        id: 2
    }
    let  wrapper = shallow(<ListItem {...initialProps}/>);
    expect(wrapper).toMatchSnapshot();
});