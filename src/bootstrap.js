import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Table from './Table';

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more data as needed
];
const App = () => (
  <div>
    <h1>Remote App</h1>
    <Table data={data}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
