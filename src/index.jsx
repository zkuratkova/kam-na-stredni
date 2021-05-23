import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Header from './components/Header';

render(<Header />, document.querySelector('#app'));
