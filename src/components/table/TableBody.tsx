import React, { ReactNode } from 'react'
import { useAppContext } from '../../App'
import TableDataInput from './TableDataInput'
import TableDataStatic from './TableDataStatic'
import EditButton from '../buttons/EditButton'

const TableBody = () => {

  const context = useAppContext();
  const {state} = context;

  const renderTableBodyRows = (): Array<ReactNode>  => {
    let rows: Array<ReactNode> = [];

    for (let x = 0; x < state.model.length; x++) {
      rows.push(
        <tr key={`tableRow${x}`}>
            <td className={`td-actions`}><EditButton index={x} /></td>
            <TableDataInput field={'merchant'} type={'text'} index={x} />
            <TableDataInput field={'item'} type={'text'} index={x} />
            <TableDataInput field={'amountCypto'} type={'text'} index={x} />
            <TableDataInput field={'currentcy'} type={'select'} index={x} />
            <TableDataStatic field={'priceCypto'} index={x} />
            <TableDataStatic field={'amountUSD'} index={x} />
        </tr>
      )
    }

    return rows;
  }

  return (
    <tbody>
      { renderTableBodyRows() }
    </tbody>
  )
}

export default TableBody;