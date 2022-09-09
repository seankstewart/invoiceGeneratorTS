import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    action: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps): JSX.Element => {
    return (
        <>
            <button onClick={props.action}>{props.children}</button>
        </>
    )
}

export default Button;
