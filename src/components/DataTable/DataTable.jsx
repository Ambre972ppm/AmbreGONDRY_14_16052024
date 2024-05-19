import React from 'react';
import './DataTable.css'

const DataTable = ({ data, columns }) => {
  return (
    <table className="display">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
                <td key={colIndex}>
                {col.data === 'startDate' || col.data === 'dateOfBirth' ? (
                  new Date(row[col.data]).toLocaleDateString() // Convert Date to string
                ) : (
                  row[col.data]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
