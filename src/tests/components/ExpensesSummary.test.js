import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

test('should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});


test('should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={23334435} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});