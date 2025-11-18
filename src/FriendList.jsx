
import FormAddFriend from "./FormAddFriend";
import Friend from "./Friend";
export default function FriendList(props){
return (
        <div>
            <div>
                <ul>
                {props.friends.map((friend, index) => <Friend key={index} data={friend} OnSelectUser={ props.OnSelectedFriend }  selectedUser  = {props. selectedUser}/>)}
                </ul>
                <FormAddFriend OnAddFriend = {props. OnAddFriendApp} ></FormAddFriend>
            </div>
            <div>
                
            </div>
           
        </div>
        
    );
}
