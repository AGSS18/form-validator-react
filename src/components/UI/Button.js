import classes from './Button.module.css';

function Button(props) {

    return (
        <button 
            className={`${classes.button} ${props.className}`} 
            onClick={props.onClick} 
            type={props.type || 'button'} 
        >
            {props.children}
        </button>
    );
}

export default Button;