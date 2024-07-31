import logo from './logo.svg';
import './App.css';
import { CustomerList } from './CustomerList';
import React from 'react'

function onDeletePressed(){
  console.log("Delete pressed")
}
function onSavePressed(){
  console.log("Save pressed")
}
function onCancelPressed(){
  console.log("Cancel pressed")
}

function updateCustomers(){
  
  
}
 
function App() {
  let customers=[['Jackie','@gmail.com','password'],['Jordan','@gmail.com','pass'],['Jonathan','@gmail','password']]
 return(
  <div>
    <div id='data'></div>
    <h4>Customer List</h4>
    <table border="1px purple">
      <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(
          (item, index)=>{
            return(<tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              </tr>
            )
          }
        )}
        
      </tbody>
    </table>
    <table border='1px purple'>
    <thead>
      <tr><td>Update</td></tr>
    </thead>
    <tbody>
      <tr>
        <td>Name:</td>
        <td><input></input></td>
      </tr>
      <tr>
        <td>Email:</td>
        <td><input></input></td>
        </tr>
        <tr><td>Password:</td><td><input></input></td></tr>
        <tr><td><button onClick={onDeletePressed}>Delete</button><button onClick={onSavePressed}>Save</button><button onClick={onCancelPressed}>Cancel</button></td></tr>
    </tbody>
    </table>
  </div>
  
 );
  
  
}
 
export default App;
