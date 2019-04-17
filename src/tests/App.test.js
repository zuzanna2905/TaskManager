import {shallow} from 'enzyme';
import React from 'react';
import App from '../App';

const initialState = 
{
  route: 'welcome',
  isSignedIn: false,
  areTasks: false,
  user: {
    id: '',
    name: ''
  },
  tasks: []
}

const mockTasksNotNull = [
  {
      task: 'room cleaning',
      id: 1
  },
  {
      task: 'dish washing',
      id: 2
  }
]

const mockTasksNull = [];

it('renders App without crashing', () => {
  let wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('route to signout', () => {
  let wrapper = shallow(<App />);
  wrapper.instance().onRouteChange('signout');
  expect(wrapper.state()).toEqual(initialState);
})

it('route to home', () => {
  const expectedState = {
    route: 'home',
    isSignedIn: true,
  }
  let wrapper = shallow(<App />);
  wrapper.instance().onRouteChange('home');
  expect(wrapper.state().route).toEqual(expectedState.route);
  expect(wrapper.state().isSignedIn).toEqual(expectedState.isSignedIn);
})

it('reset state', () => {
  const expectedState = {
    route: 'home',
    isSignedIn: true,
  }
  let wrapper = shallow(<App />);
  wrapper.instance().onRouteChange('home');
  expect(wrapper.state().route).toEqual(expectedState.route);
  expect(wrapper.state().isSignedIn).toEqual(expectedState.isSignedIn);
  wrapper.instance().reset();
  expect(wrapper.state().route).toEqual(initialState.route);
  expect(wrapper.state().isSignedIn).toEqual(initialState.isSignedIn);
})

it('set tasks', () => {
  let wrapper = shallow(<App />);
  expect(wrapper.state().areTasks).toEqual(false);
  wrapper.instance().updateData(mockTasksNotNull);
  expect(wrapper.state().tasks).toEqual(mockTasksNotNull);
  expect(wrapper.state().areTasks).toEqual(true);
  wrapper.instance().updateData(mockTasksNull);
  expect(wrapper.state().tasks).toEqual([]);
  expect(wrapper.state().areTasks).toEqual(false);
})