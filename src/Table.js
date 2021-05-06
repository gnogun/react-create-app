/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>remove</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button type="button" onClick={() => props.removeCharacter(index)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
