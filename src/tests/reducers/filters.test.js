import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test ('should setup default filter values',() => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test ('should set sortBy to amount',() => {
    const state = filtersReducer(undefined, {type: 'AMOUNT_SORT'});
    expect(state.sortBy) .toBe('amount') ; 
});

test ('should set sortBy to amount',() => {
const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'

};
const action = {type: 'DATE_SORT'};
const state = filtersReducer(currentState, action);
expect(state.sortBy).toBe('date');
});

test ('should set text filter',() => {
    const text = 'abc';
    const currentState = {
        text,
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    
    };
const action = {type: 'SET_TEXT_FILTER', text};
const state = filtersReducer(currentState, action);
expect(state.text).toBe(text);
});

test ('should set startDate filter',() => {
    const startDate = moment(0);
    const currentState = {
        text: '',
        startDate,
        endDate: undefined,
        sortBy: 'amount'
    
    };
    
const action = {type: 'SET_START_DATE', startDate};
const state = filtersReducer(currentState, action);
expect(state.startDate).toBe(startDate);
});

test ('should set endDate filter',() => {
    const endDate = moment(0);
    const currentState = {
        text: '',
        startDate: undefined,
        endDate,
        sortBy: 'amount'
    
    };
const action = {type: 'SET_END_DATE',endDate};
const state = filtersReducer(currentState, action);
expect(state.endDate).toBe(endDate);
});


