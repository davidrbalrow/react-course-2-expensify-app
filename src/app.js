

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class NewSyntax{
    name='Jen';
    getGreeting = () => {
        return `Hi my name is ${this.name}`;
    }
};
const newSyntax = new NewSyntax;
const x = newSyntax.getGreeting;
console.log(x);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

