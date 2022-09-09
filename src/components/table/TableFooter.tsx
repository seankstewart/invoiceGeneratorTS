import React, { MutableRefObject } from 'react'
import SaveButton from '../buttons/SaveButton'
import DeleteButton from '../buttons/DeleteButton'
import AddButton from '../buttons/AddButton'
import UpdateRatesButton from '../buttons/UpdateRatesButton'

const TableFooter = ({tableRef}: {tableRef: MutableRefObject<HTMLTableElement>}) => {
  return (
    <>
      <tfoot>
          <tr>
              <td colSpan={7} align="left">
                  <div style={{display:'flex',justifyContent:'flex-start'}}>
                    <AddButton tableRef={tableRef}>Add</AddButton>
                    <UpdateRatesButton>Update Rates</UpdateRatesButton>
                  </div>
                  <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <SaveButton>Save</SaveButton>
                    <DeleteButton>Delete</DeleteButton>
                  </div>
              </td>
          </tr>
      </tfoot>
    </>
  )
}

export default TableFooter;