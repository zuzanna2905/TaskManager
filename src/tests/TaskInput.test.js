import {shallow} from 'enzyme';
import React from 'react';
import TaskInput from '../components/TaskInput/TaskInput';

it('renders TaskInput without crashing', () => {
    let wrapper = shallow(<TaskInput />);
    expect(wrapper).toMatchSnapshot();
});

it('simulate TaskInput', () => {    
    const expectedState = {
        input: 'kwiatki'
    }
    let wrapper2 = shallow(<TaskInput />);
    wrapper2.find('[id="task"]').simulate('change', {target: {value: 'kwiatki', name:'input'}});
    expect(wrapper2.state().input).toEqual(expectedState.input);
    wrapper2.find('[id="submittask"]').simulate('click');  
})