import React from 'react';
import { Header } from './features/header/Header';
import { Payment } from './features/payment/Payment';
import { Account } from './features/account/Account';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Account />
    </div>
  );
}

export default App;
