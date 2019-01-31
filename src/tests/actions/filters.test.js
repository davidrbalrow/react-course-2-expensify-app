import {
    setStartDate, 
    setEndDate, 
    sortByAmount, 
    sortByDate,
    setTextFilter
} from '../../actions/filters';

import moment from 'moment';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate sort by amount action object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({type: 'AMOUNT_SORT'})
});

test('should generate sort by date action object', ()=>{
    expect(sortByDate()).toEqual({type: 'DATE_SORT'})
});

test('should set text filter', ()=>{
    const text = 'abc';
    const action = setTextFilter(text);
    expect(action).toEqual(
        {type: 'SET_TEXT_FILTER',
        text
    })   
});

test('should set text filter', ()=>{
    const text = '';
    const action = setTextFilter();
    expect(action).toEqual(
        {type: 'SET_TEXT_FILTER',
        text
    })   
});
    


