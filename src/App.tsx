import React from 'react';

function App() {
  fetch(
    'https://reststop.randomhouse.com/resources/titles?keyword=Grisham%20Christmas'
  )
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div className="App"></div>;
}

export default App;
