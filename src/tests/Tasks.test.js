import {shallow} from 'enzyme';
import React from 'react';
import Tasks from '../components/Tasks/Tasks';

const initialProps = {
    tasks : [
        {
            task: 'room cleaning',
            id: 1
        },
        {
            task: 'dish washing',
            id: 2
        }
    ]
}
const initialProps2 = {}

it('renders Tasks without crashing with data', () => {
    let wrapper = shallow(<Tasks {...initialProps}/>);
    expect(wrapper).toMatchSnapshot();
});

it('simulate listItems', () => {    
    let wrapper2 = shallow(<Tasks {...initialProps}/>);
    wrapper2.instance().listItems();
    wrapper2.instance().TaskList();
})

it('renders Tasks without crashing without data', () => {
    let wrapper3 = shallow(<Tasks {...initialProps2}/>);
    expect(wrapper3).toMatchSnapshot();
});