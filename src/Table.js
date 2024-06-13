import React from 'react';

const tableStyle = {
    borderCollapse: 'collapse'
}

const styleTh = {
    backgroundColor:'#1D24CA',
    color:'#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '12px',
    border: '1px solid #dee2e6'
}

const tdStyles = {
    padding: '12px',
    border: '1px solid #dee2e6'
}

const Table = ({ title = 'React Table As Microfrontend', data }) => {
  return (
    <fieldset style={tableStyle}>
       <legend>{title}</legend>
    <div>
    <table style={{width: '100%'}}>
      <thead>
        <tr>
          <th style={styleTh}>ID</th>
          <th style={styleTh}>Name</th>
          <th style={styleTh}>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={tdStyles}>{item.id}</td>
            <td style={tdStyles}>{item.name}</td>
            <td style={tdStyles}>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </fieldset>
  );
};

export default Table;
