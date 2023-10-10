import { LegacyRef, forwardRef } from "react";

interface IProps {
    name: string,
    value: number,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    min?: number,
    max?: number
}

const DateInput = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <input
        ref={ref}
        name={props.name}
        type="date"
        min={props.min ? new Date(props.min).toISOString().split('T')[0] : undefined}
        max={props.max ? new Date(props.max).toISOString().split('T')[0] : undefined}
        value={new Date(props.value).toISOString().split('T')[0]}
        onChange={props.onChange}
        />
    )
})

export default DateInput;