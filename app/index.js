import React from 'react';
import {render} from 'react-dom';
import Button from './components/Button'
import Calculator from './components/Calculator'
import Book from './components/Book'
import './SCSS/book.scss'

const App = () =>
  <div>
  {/*<Button></Button>*/}
  {/*<Calculator></Calculator>*/}
  <Book></Book>
  </div>;

render(<App />, document.getElementById('root'));