import React from 'react';
import ReactDOM from 'react-dom';
import {StateProvider} from "./context/state-context";
import reducer,{initialState} from "./reducer";
import './index.css';
import App from './App';


ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById('root')
);
