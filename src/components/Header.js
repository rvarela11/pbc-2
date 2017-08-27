import React from 'react';

export default function Header (props) {
  let headerName;

  if (props.pathname === "/") {
    headerName = 'Alumni';
  } else {
    headerName = 'Company';
  }

  return (
    <header style={{backgroundColor: (props.pathname === "/") ? '#47a2f8' : '#ff5a5f'}}>
        <h1>{headerName} Directory</h1>
    </header>
  )
}
