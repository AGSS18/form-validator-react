import { useState, useRef, Fragment } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [isError, setIsError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const nameSubmited = nameInputRef.current.value;
        const ageSubmited = ageInputRef.current.value;
        if(nameSubmited.trim().length === 0 || ageSubmited.trim().length === 0) {
            setIsError({error: 'Invalid Input', message: 'Please enter a valid name and age (non-empty values).'});
            return;
        }
        if(+ageSubmited < 1) { //the plus is to ensure it's a number
            setIsError({error: 'Invalid Input', message: 'Please enter a valid age (> 0).'})
            return;
        }
        props.onAddUser({username: nameSubmited, age: ageSubmited});
        nameInputRef.current.value = ''; //Rarely use this to set value null, not good practice
        ageInputRef.current.value = ''; //Rarely use this to set value null, not good practice
    }

    function closeModal(event) {
        event.preventDefault();
        setIsError(null);
    }

    return(
        <Fragment>
            {isError && 
            <ErrorModal 
                onClick={closeModal} 
                error={isError.error} 
                message={isError.message} />
        }
            <Card className={classes.input} >
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">Username</label>
                    <input ref={nameInputRef} type="text" id="username" /> 
                    <label htmlFor="age">Age (Years)</label>
                    <input ref={ageInputRef} type="number" id="age" />
                    <Button  type="submit" className={classes} >Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default AddUser;