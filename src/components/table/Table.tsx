import React, { useRef } from 'react'
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import TableBody from './TableBody';

interface IRef {
  tableRef:HTMLTableElement
}

const Table = () => {
  
  const tableRef = useRef<HTMLTableElement>(null!);

  return (
    <>
      <table cellPadding="0" cellSpacing="0" ref={tableRef}>
          <TableHeader />
          <TableBody />
          <TableFooter tableRef={tableRef} />
      </table>
    </>
  )
}

export default Table;