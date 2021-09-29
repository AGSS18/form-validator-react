import UserItem from "./UserItem";

function UsersList(props) {
    console.log(props)
    if(props.users.length) {
        return (
            props.users.map((user, index) => {
                return(
                    <UserItem 
                        key={index} 
                        id={user.id} 
                        username={user.username} 
                        age={user.age} 
                    />
                )
            })
        );
    } else return null;
}

export default UsersList;