import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Answer from '../src/components/Answer';

configure({ adapter: new Adapter() });

describe('Answer', () => {
  const wrapper = shallow(<Answer />);
});
