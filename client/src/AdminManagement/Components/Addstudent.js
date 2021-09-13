import React,{useState} from "react";

function Addstudent(){
    const [name, setName] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [Password, setPwd] = useState("");

    function saveData(Event) {
      Event.preventDefault();
      
      const newData = {
        name,
        phoneNumber,
        Password
      }

      console.log(newData);
    }

    return(
            <div>
                <h3>Create Admin(function)</h3>
                <label htmlFor="name">Administrator's Name</label>
                <input type="text" placeholder="Enter Admin Name"
                onChange={(Event)=>{
                  setName(Event.target.value);
                }}/>
                <br/>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" placeholder="Enter phone number"
                onChange={(Event)=>{
                  setNumber(Event.target.value);
                }}/>
                <br/>

                <label htmlFor="Password">Password</label>
                <input type="text" placeholder="Enter password"
                onChange={(Event)=>{
                  setPwd(Event.target.value);
                }}/>
                <br/>

                <button type="submit" onClick={saveData}>Submit</button>
            </div>
            
    );
}

export default Addstudent;