import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HelpfulBtn from '../src/components/HelpfulBtn';

configure({ adapter: new Adapter() });

describe('HelpfulBtn', () => {
  const wrapper = shallow(<HelpfulBtn />);
});
