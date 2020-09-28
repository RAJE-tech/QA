import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnswersList from '../src/components/AnswersList';

configure({ adapter: new Adapter() });

describe('AnswersList', () => {
  const wrapper = shallow(<AnswersList />);
});
