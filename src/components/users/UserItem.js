import Card from "../UI/Card";
import classes from './UserItem.module.css';

function UserItem(props) {
    return(
        <Card className={classes["user-item"]} >
            <p>{props.username}</p>
            <p>{props.age} (years old)</p>
        </Card>
    );
}

export default UserItem;