import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnswerHelpfulBtn from '../src/components/AnswerHelpfulBtn';

configure({ adapter: new Adapter() });

describe('AnswerHelpfulBtn', () => {
  const wrapper = shallow(<AnswerHelpfulBtn />);
});
