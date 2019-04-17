import {shallow} from 'enzyme';
import React from 'react';
import Register from '../components/Register/Register';

const registerData = {
    email: 'john@gmail.com',
    password: 'cookies',
    name: 'John'
}

it('renders Register without crashing', () => {
    let  wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
});

it('simulate Register', () => {    
    let wrapper2 = shallow(<Register />);
    wrapper2.find('[id="name"]').simulate('change', {target: {value: 'John', name: 'name'}});
    wrapper2.find('[id="password"]').simulate('change', {target: {value: 'cookies', name: 'password'}});
    wrapper2.find('[id="email"]').simulate('change', {target: {value: 'john@gmail.com', name: 'email'}});
    expect(wrapper2.state().name).toEqual(registerData.name);
    expect(wrapper2.state().password).toEqual(registerData.password);
    expect(wrapper2.state().email).toEqual(registerData.email);
    wrapper2.find('[id="registersubmit"]').simulate('click');
})