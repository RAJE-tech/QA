import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReportAnswerBtn from '../src/components/ReportAnswerBtn';

configure({ adapter: new Adapter() });

describe('ReportAnswerBtn', () => {
  const wrapper = shallow(<ReportAnswerBtn />);
});
