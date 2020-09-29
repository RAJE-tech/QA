import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionHelpfulBtn from '../src/components/QuestionHelpfulBtn';

configure({ adapter: new Adapter() });

describe('QuestionHelpfulBtn', () => {
  const wrapper = shallow(<QuestionHelpfulBtn />);
});
