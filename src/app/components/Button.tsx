
type ButtonProps = {
    title: string,
    url: string,
    typeButton: "submit" | "reset" | "button" | undefined,
    ariaLabel: string,
}

const Button = (props:ButtonProps) => {
    return (
        <button className="button" type={props.typeButton} aria-label={props.ariaLabel}>
            <span>{props.title}</span>
        </button>
    )
}

export default Button