import React from 'react';
import ReactDom from 'react-dom';
import Indecision from './component/Indecision.js';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
//this is the entry point


const target= document.getElementById('app');

ReactDom.render(<Indecision />, target);