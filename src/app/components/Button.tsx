
type ButtonProps = {
    title: string,
    typeButton: "submit" | "reset" | "button" | undefined,
    ariaLabel: string,
    arrow?: boolean,
    disabled?: boolean,
}

const Button = (props:ButtonProps) => {
    return (
        <button className="button" type={props.typeButton} aria-label={props.ariaLabel} disabled={props.disabled}>
            <span>{props.title}</span>
            {props.arrow && (
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                     fill="none">
                    <path d="M4.88452 0.880859L9.19988 5.00007L4.88452 9.11928" stroke="white" stroke-width="1.28571"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )}
        </button>
    )
}

export default Button