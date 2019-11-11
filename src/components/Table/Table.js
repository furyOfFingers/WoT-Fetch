import React from "react";
import './style.css';

const Table = ({
  tHeader,
  tContent
}) => {

  return (
    <table>
      <thead>
        <tr>
          {tHeader.map((el, i) => <th key={i}>{el}</th>)}
        </tr>
      </thead>
      <tbody>
        {Object.keys(tContent.data).map((k, i) => {
          let data = tContent.data[k];
          return (
            <tr key={i}>
              <td>{k}</td>
              <td>{data.a}</td>
              <td>{data.b}</td>
              <td>{data.c}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
//   return(
//     <div className='table-container'>
// dd
//     </div>
//   );
}

export default Table;