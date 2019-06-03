import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store';
import { loadState } from './store/localStorage';

import './index.css';

const store = configureStore(loadState());

render(<Root store={store} />, document.getElementById('app'));
