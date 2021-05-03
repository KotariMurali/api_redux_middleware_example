import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import axios from "axios";
function Users() {
  const [Users, setusers] = useState([]);
  const [searchuser, Setserchuser] = useState("");
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
  console.log(Users);
  //console.log(searchuser);

  return (
    <div>
      {/* <input type="text" placeholder="search user by name" value={searchuser} onChange={(e)=>setusers(e.target.value)}/> */}
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>username</TableCell>
                <TableCell>email</TableCell>
                <TableCell>address</TableCell>
                <TableCell>phone</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((user) => (
                <TableRow>
                  <TableCell>{user.id}</TableCell>

                  <TableCell>{user.name}</TableCell>

                  <Link to={"/users/" + user.username}>
                    <TableCell>{user.username}</TableCell>
                  </Link>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.address.street + user.address.suite}
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.website}</TableCell>
                  <TableCell>
                    {user.company.name + user.company.catchPhrase}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Users;
