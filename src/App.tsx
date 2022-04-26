import React from 'react';
import { Header } from './features/header/Header';
import { Payment } from './features/payment/Payment';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Payment />
    </div>
  );
}

export default App;
