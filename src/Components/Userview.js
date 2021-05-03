import React, { useState, useEffect } from "react";
import axios from "axios";
function Userview(props) {
  const Username = props.match.params.name;
  const [Users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setusers(response.data);
      })
      .catch((errror) => {
        console.log(errror);
      });
  }, []);
  //const filter = Users.filter((e)=>console.log(e.username))
  //const filter=Users.filter((e)=>e.Username)
  //console.log(filter)
  //console.log(Username)
  //console.log (filter)
  //if(filter===Username)
  //{
  // setusers()
  //}
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].username === Username) {
      setusers(Users[i]);
    }
  }
  console.log("murali");
  console.log(Users);
  return (
    <div>
      username:<p>{Users.username}</p>
      name:<p>{Users.name}</p>
      phone:<p>{Users.phone}</p>
      website:<p>{Users.website}</p>
    </div>
  );
}
export default Userview;
