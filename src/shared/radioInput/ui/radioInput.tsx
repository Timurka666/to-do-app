interface IProps<T> {
    params: T[],
    setState: React.Dispatch<React.SetStateAction<T>>,
    name: string
}

function RadioInput<T>(props: IProps<T>) {
    return (
        <div>
            <fieldset>

            {props.params.map((el, i) => (
                <>
                <input name={props.name} type="radio" id={`${el}-${i}`} value={`${el}`} onChange={(e) => {props.setState(el)}} />
                <label htmlFor={`${el}-${i}`}>{`${el}`}</label>
                </>
            ))}
            </fieldset>
        </div>
    )
}

export default RadioInput;