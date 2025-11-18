import { useState, useEffect } from "react";
import friends from './firend';
import FriendList from "./FriendList.jsx";
import SpiltForm from "./spiltForm.jsx";
export default function App(){

    const [initalFirends , setInitalFirends ]= useState(friends);
    const [selectedFriend , setSelectedFriend ]= useState(null);
    function handleAddFriend(newFriend){
        setInitalFirends(prevFriends => [...prevFriends, newFriend]);
    }
    function handleSelectFriend(friend){
        setSelectedFriend(friend);
    }

    function handleSplitBill(value){
        setInitalFirends(initalFirends => initalFirends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));
        setSelectedFriend(null);
    }

    return( 
        <div>
            <h1>My Friends</h1>
            <div className="app-container">
                <FriendList friends={initalFirends} OnAddFriendApp ={handleAddFriend} OnSelectedFriend = {handleSelectFriend} selectedUser = {selectedFriend}/>
               {selectedFriend &&(
                    <SpiltForm selectedUser = {selectedFriend} onSplitBill={handleSplitBill}></SpiltForm>
               )} 
            </div>
        </div>
        
   
    );
    
}
