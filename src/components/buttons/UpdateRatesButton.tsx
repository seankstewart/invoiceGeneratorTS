import React, { ReactElement, useCallback} from 'react';
import Button from './Button';
import { useAppContext } from '../../App';
import API from '../../api/api';

interface IUpdateRatesButton {
    currentcy: string;
    priceCypto?: string | number;
    amountUSD: string | number;
    amountCypto?: number
}

const UpdateRatesButton = ({children}: {children: string}): ReactElement | null => {

    const context = useAppContext();
    const {state, setState} = context;

    const updateData = useCallback( async (data:IUpdateRatesButton[]) => {

      /* updateData was called by handleClick */
      return await Promise.all(data.map(async (d:IUpdateRatesButton) => {
          const code = d.currentcy;
          const ratesUSD:number | undefined = await new API(state).getRatesToUSD(code);
          d.priceCypto = ratesUSD;
          if (d.priceCypto !== undefined && d.amountCypto !== undefined) {
            d.amountUSD = d.priceCypto * d.amountCypto;
          }
          setState({...state, mode: 'read', message: "Rates Updated Successfully"});
          return d;
      }));
    },[state, setState])

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('update rates');

        window.setTimeout(() => updateData(state.model).then((res) => {
          setState({mode: 'read', model: res, isPending: false, message: ""})
        }), 3000);

        setState({...state, mode: 'edit', isPending: true, message: ""})
    },[state, setState, updateData])

    if (state.mode === 'read' || (state.mode !== 'edit')) {
        return (
            <Button action={handleClick}>{children}</Button>
        )
    } else {
        return null;
    }
}

export default UpdateRatesButton;