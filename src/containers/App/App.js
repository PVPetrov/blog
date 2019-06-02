import React from 'react';
import MainLayout from '../../layout/Main';
import Header from '../Header';
import Main from '../Main';

const App = () => <MainLayout header={<Header />} main={<Main />} />;

export default App;
