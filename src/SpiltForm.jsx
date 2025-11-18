import { useState } from "react";
export default function SpiltForm({ selectedUser, onSplitBill }){
    const [billValue,setBillValue]= useState("");
    const [myExpense ,setMyExpense]= useState("");
    const friendExpense = billValue ? billValue - myExpense : "";
    const [whoIsPaying ,setWhoIsPaying]= useState("user");

    function handleSubmit(e){
        e.preventDefault();

        if (!billValue || !myExpense) return;

        let splitValue;
        if (whoIsPaying === "user"){
            splitValue = friendExpense;
        } else {
            splitValue = -myExpense;
        }
        onSplitBill(splitValue);
    }

    return(
        <form className="form-split-friend" onSubmit={handleSubmit}>
            <h1>Split A Bill With {selectedUser.name}</h1>
                    <div>
                        <label>🧑‍✈️ Bill Value</label>
                        <input type="number" placeholder="Enter Bill Value"
                        value={billValue}
                        onChange={(e)=>setBillValue(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>📲 Your expense</label>
                        <input type="number" 
                        value={myExpense}
                        onChange={(e)=>setMyExpense(Number(e.target.value) > billValue ? myExpense : Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>📲 {selectedUser.name}'s expense</label>
                        <input type="number" disabled 
                        value={friendExpense}
                        />
                    </div>
                    <div>
                        <label>📲 who is paying the bill </label>
                        <select
                        value={whoIsPaying}
                        onChange={(e)=>setWhoIsPaying(e.target.value)}
                        >
                            <option value="user">You</option>
                            <option value="friend">{selectedUser.name}</option>    
                        </select>
                    </div>

                    <button className="btn-add-friend">Split Bill</button>
        </form>
    );
}
