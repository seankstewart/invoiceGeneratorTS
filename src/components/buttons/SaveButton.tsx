import React, {ReactElement, ReactNode, useCallback} from 'react';
import Button from './Button';
import { useAppContext } from '../../App';

const SaveButton = ({children} : {children: ReactNode}): ReactElement | null => {

    const context = useAppContext();
    const {state, setState} = context;

    const handleEdit = useCallback((e: React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        console.log('save item');

        setState({...state, mode: 'read', message: "Item(s) Saved Successfully", index: null})
    },[state, setState])

    if (state.mode === 'edit' && 'index' in state && state.index !== null) {
        return (
            <Button action={handleEdit}>{children}</Button>
        )
    } else {
        return null;
    }
}

export default SaveButton;