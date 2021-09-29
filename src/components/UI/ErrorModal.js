import ReactDom from 'react-dom'; //for Portals
import { Fragment } from 'react';
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClick} />
}

function ModalOverlay(props) {
    return (
        <Card className={classes.modal} >
                <header className={classes.header} >
                    <h2>{props.error}</h2>
                </header>
                <div className={classes.content} >
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions} >
                    <Button onClick={props.onClick} className={classes}>Close</Button>
                </footer>
        </Card>
    );
}

function ErrorModal(props) {
    return(
        <Fragment>
            {ReactDom.createPortal(
                <Backdrop 
                    onClick={props.onClick} 
                />, 
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(
                <ModalOverlay 
                    error={props.error}
                    message={props.message}
                    onClick={props.onClick}
                />, 
                document.getElementById('overlay-root')
            )}
        </Fragment>

    );
}

export default ErrorModal;