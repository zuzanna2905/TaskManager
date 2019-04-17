import {shallow} from 'enzyme';
import React from 'react';
import SignIn from '../components/SignIn/SignIn';

it('renders SignIn without crashing', () => {
    let wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
});

it('simulate SignIn', () => {    
    const expectedState = {
        email: 'john@gmail.com',
        password: 'cookies'
    }
    let wrapper2 = shallow(<SignIn />);
    wrapper2.find('[id="password"]').simulate('change', {target: {value: 'cookies', name:'password'}});
    wrapper2.find('[id="email"]').simulate('change', {target: {value: 'john@gmail.com', name:'email'}});
    expect(wrapper2.state().password).toEqual(expectedState.password);
    expect(wrapper2.state().email).toEqual(expectedState.email);
    wrapper2.find('[id="signinsubmit"]').simulate('click');  
})