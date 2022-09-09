import React, {MutableRefObject, ReactElement, ReactNode, useCallback} from 'react';
import Button from './Button';
import { useAppContext } from '../../App';
import API from '../../api/api';

const AddButton = ({tableRef, children}: {tableRef: MutableRefObject<HTMLTableElement>, children: ReactNode}): ReactElement | null => {

    const context = useAppContext();
    const {state, setState} = context;

    // const [ref, setRef] = useState(null);
    
    const handleAdd = useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        console.log('add item');

        // force scrollbar to bottom of tbody once it has reached it's max height
        if (tableRef !== null && 'current' in tableRef && tableRef.current !== null) {
            const currentRef = tableRef.current;
            const childNode: any = currentRef?.childNodes[1];
            const scrollTop = childNode?.scrollTop;
            
            let interval: NodeJS.Timeout;
            const updateScroll: () => void = () => {
                // childNode.scrollHeight = scrollTop;
                // childNode.scrollTo({bottom: 0});
                childNode.scroll({top: childNode.scrollHeight});
                if (interval !== null) {
                    clearInterval(interval)
                }
            }

            // if (childNode.clientHeight >= (childNode.offsetHeight - 20)) {
            // if (childNode.scrollHeight >= (childNode.offsetHeight - 20)) {
            if (childNode.scrollHeight >= childNode.clientHeight) {
                interval = setInterval(updateScroll, 10)
            }
            
            state.model.splice(state.model.length, 1, new API().emptyModel);
            setState({...state, mode: 'edit', index: state.model.length - 1, message: ""})
        }
        
    },[state, setState, tableRef])

    if (state.mode === 'read' || (state.mode !== 'edit')) {
        return (
            <div className={`button-add`}>
                <Button action={handleAdd}>{children}</Button>
            </div>
        )
    } else {
        return null;
    }
}

export default AddButton;