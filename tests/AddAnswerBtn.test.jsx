import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddAnswerBtn from '../src/components/AddAnswerBtn';

configure({ adapter: new Adapter() });

describe('AddAnswerBtn', () => {
  const wrapper = shallow(<AddAnswerBtn />);
});
