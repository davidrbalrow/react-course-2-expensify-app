import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

test('should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});