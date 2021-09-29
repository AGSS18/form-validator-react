import { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
    const [userInfo, setUserInfo] = useState({username: '', age: ''});
    const [isError, setIsError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        if(userInfo.username.trim().length === 0 || userInfo.age.trim().length === 0) {
            setIsError({error: 'Invalid Input', message: 'Please enter a valid name and age (non-empty values).'});
            return;
        }
        if(+userInfo.age < 1) { //the plus is to ensure it's a number
            setIsError({error: 'Invalid Input', message: 'Please enter a valid age (> 0).'})
            return;
        }
        props.onAddUser(userInfo);
        setUserInfo({username: '', age: ''});
    }

    function handleUsername(event) {
        setUserInfo({...userInfo, username: event.target.value});
    }

    function handleUsernameAge(event) {
        setUserInfo({...userInfo, age: event.target.value});

    }

    function closeModal(event) {
        event.preventDefault();
        setIsError(null);
    }

    return(
        <div>
            {isError && 
            <ErrorModal 
                onClick={closeModal} 
                error={isError.error} 
                message={isError.message} />
        }
            <Card className={classes.input} >
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsername} type="text" id="username" value={userInfo.username} /> 
                    <label htmlFor="age">Age (Years)</label>
                    <input onChange={handleUsernameAge} type="number" id="age" value={userInfo.age} />
                    <Button  type="submit" className={classes} >Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;