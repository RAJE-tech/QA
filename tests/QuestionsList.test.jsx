import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionsList from '../src/components/QuestionsList';

configure({ adapter: new Adapter() });

describe('QuestionsList', () => {
  const wrapper = shallow(<QuestionsList />);

  it('should render', () => {
    shallow(<QuestionsList />);
  });
});
