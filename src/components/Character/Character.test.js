import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character', () => {
  let wrapper;
  let mockUpdateFave;

  beforeEach(() => {
    wrapper = shallow(<Character key='test'/>);
    mockUpdateFave = jest.fn();
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when there is a name', () => {
    let mockProps = {
      homeworld: 'test earth',
      name: 'John Adams',
      population: 300,
      species: 'tree frog',
      films: ['test', 'test'],
      updateFave: jest.fn(),
    }
    wrapper = shallow(<Character {...mockProps} key='test'/>)
    expect(wrapper).toMatchSnapshot();
  })

  it('should fire updateFave when button is clicked', () => {
    let mockProps = {
      homeworld: 'test earth',
      name: 'John Adams',
      population: 300,
      species: 'tree frog',
      films: ['test', 'test'],
      updateFave: mockUpdateFave,
    }
    let mockExpected = {
      homeworld: 'test earth',
      name: 'John Adams',
      population: 300,
      species: 'tree frog',
      films: ['test', 'test'],
    }
    wrapper = shallow(<Character {...mockProps} key={mockProps.name}/>)

    wrapper.find('.star').simulate('click');
    expect(mockUpdateFave).toHaveBeenCalledWith(mockExpected);
  })
})
