import { LegacyRef, forwardRef } from "react";
import './style.scss';

interface IProps {
    name: string,
    placeholder: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <input
        ref={ref}
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
    )
})

export default TextInput;