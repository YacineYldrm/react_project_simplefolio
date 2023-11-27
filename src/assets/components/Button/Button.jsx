import './Button.scss'

const Button = (props) => {
    return ( 
        <a className="button" href="#">{props.buttonText}</a>
    );
}

export default Button;