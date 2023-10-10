import { LegacyRef, forwardRef } from "react";
import './style.scss';

interface IProps {
    children: any,
    type?: 'success' | 'warning' | 'cancel' | 'default',
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = forwardRef((props: IProps, ref: LegacyRef<HTMLButtonElement>) => {
    return (
        <button ref={ref} className={`button ${props.type ?? 'default'}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
})

export default Button;