export default function Friend(props){
   const isSelected =  props.selectedUser?.name ==props.data.name ; 
    return(
        <li className={isSelected ?'selected' : ''}>
            <img src={props.data.image} alt={props.data.name}/>
            <div className="friend-info">
                <span className="name">{props.data.name}</span> 
                {props.data.age >60 ?(
                    <span style={{ color:"red"}}>Your age is :  {props.data.age}</span>
                ):props.data.age >30 ?(
                    <span style={{ color:"green"}}>Your age is :  {props.data.age}</span>
                ):props.data.age >18 ?(
                    <span style={{ color:"blue"}}>Your age is :  {props.data.age}</span>
                ):null}

                <span></span> City: {props.data.city}
                {props.data.balance < 0 && (
                    <p className="red">You owe {props.data.name} {Math.abs(props.data.balance)}$</p>
                )}
                {props.data.balance > 0 && (
                    <p className="green">{props.data.name} owes you {Math.abs(props.data.balance)}$</p>
                )}
                {props.data.balance === 0 && (
                    <p>You and {props.data.name} are even</p>
                )}
             </div>
             <button className="friend-info-button" onClick={()=>props.OnSelectUser(props.data)}>{isSelected ? "Close" : "Select"}</button>
        </li>
    );
}
