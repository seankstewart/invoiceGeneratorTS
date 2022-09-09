import React, { ReactNode } from 'react'

const TableData = ({children}: {children: ReactNode}) => {
  return (
    <td>
        {children}
    </td>
  )
}

export default TableData