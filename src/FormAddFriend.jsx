import { useState, useEffect } from "react";

export default function FormAddFriend(props) {
    const [formAppear, setFormAppear] = useState(false);
    const [buttonText, setButtonText] = useState("Add Friends");  
    
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [city , setCity] = useState(""); 
    const [image , setImage] = useState(""); 
    const [active , setActive]= useState(false); 

    useEffect(() => {
        if (name && age && city) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [name, age, city]);

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleAgeChange(e){    
        setAge(e.target.value);
    }
    function handleCityChange(e){
        setCity(e.target.value);
        console.log(city);
    }
    function handleImageChange(e){
        setImage(e.target.value);

    }
    function toggleForm() {
     setFormAppear(prev => !prev);
    setButtonText(formAppear ? "Add Friends" : "Close");
    }

    function handleAddFriend(e){
        e.preventDefault();
        
        if (!name || !age || !city) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            age: Number(age),
            city,
            image: image || `/img1.png`, 
            balance: 0,
        }

        props.OnAddFriend (newFriend);
        
        setName("");
        setAge("");
        setCity("");
        setImage("");
        setFormAppear(false); // Close form after adding friend
        setButtonText("Add Friends");
    }
    return (
        <>
            {formAppear && (
                <form onSubmit={handleAddFriend}>
                <div className="form-add-friend">
                    
                    <div>
                        <label>🧑‍✈️ Friend Name</label>
                        <input type="text" required placeholder="Enter Friend Name" value={name} onChange={handleNameChange} />
                    </div>
                     <div>
                        <label>🧑‍✈️ Friend Age</label>
                        <input type="number" required placeholder="Enter Friend Age" value ={age} onChange={handleAgeChange}  />
                    </div>
                     <div>
                        <label>🧑‍✈️ Friend City</label>
                        <input type="text" required placeholder="Enter Friend City" value={city} onChange={handleCityChange}  />
                    </div>
                    <div>
                        <label>📲 image URL</label>
                        <input type="text" placeholder="Image URL (e.g., /img1.png)" value={image} onChange={handleImageChange} />
                    </div>

                    <button className="btn-add-friend" disabled={active ? false : true}>Add</button>
                </div>
                </form>
            )}
            <div className="carry-button">
                 <button className="btn-add-friends" onClick={toggleForm}>{buttonText}</button>
            </div>
        </>
    );
}
