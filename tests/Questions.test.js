import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Questions from '../src/components/QuestionsList';

configure({ adapter: new Adapter() });

describe('Questions', () => {
  const wrapper = shallow(<Questions />);
});
