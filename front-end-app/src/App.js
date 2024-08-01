import logo from './logo.svg';
import './App.css';
import { CustomerList } from './CustomerList';
import React, {useState, useEffect} from 'react'
import {getAll, get, deleteById,post,put} from './memdb.js'




 
function App() {


  let blank={blank:{"id":-1,"name":"","email":"","password":""}};
  /*const initialCustomers={customers:[{"id":1,"name":"Jackie","email":"@gmail.com","password":"password"},
    {"id":2,"name":"Jordan","email":"@gmail.com","password":"password"},
    {"id":3,"name":"Jonathan","email":"gmail.com","password":"password"}]}*/
  const [customer, setCustomers] = useState([])
  //const [customer, setCustomer]=useState(initialCustomers)
  const [formObject, setFormObject]=useState(blank)
  const mode = (formObject.id >= 0)? "Update" : "Add";

  useEffect(()=> {getCustomers()}, [formObject])

  const getCustomers = function(){
    setCustomers(getAll())
  }

  const  onCancelPressed = function(){
    console.log("cancel pressed")
    setFormObject(blank);
  }
  const onSavePressed = function(){
    console.log("Save pressed")
    if (mode === 'Add'){
      post(formObject);
    }
    else if (mode === 'Update'){
      put(formObject);
    }
    setFormObject(blank);
  }
  const onDeletePressed = function(){
    console.log("delete")
    console.log(formObject)
    if (formObject.id >= 0) {
      deleteById(formObject.id);
      setFormObject(blank);
    } else {
      setFormObject(blank);
    }
  }

  const handleInputChange = function(event){
  const name = event.target.name;
  const value = event.target.value;
  let newFormObject = {...formObject}
  newFormObject[name] = value;
  setFormObject(newFormObject);
  }

  const handleCustomerClick = function(item){
    console.log("selected",{item})
    //console.log("customer selected:" ,{item});
    if (formObject.id===item.id){
      setFormObject(blank)
    }else{
      setFormObject(item)
    }
    //setFormObject(item);
  }
  return(
  <div>
    <div id='data'></div>
    <h4>Customer List</h4>
    <h3>{mode}</h3>
    <table border="1px black">
      <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th> 
        </tr>
      </thead>
      <tbody>
        {customer.map(
          (item, index)=>{
            return(<tr key={index} className={(item.id===formObject.id)? 'selected':''} onClick={()=>handleCustomerClick(item)}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              </tr>
            )
          }
        )}
        
      </tbody>
    </table>
    <table border='1px black'>
    <thead>
      <tr><td>Update</td></tr>
    </thead>
    <tbody>
      <tr>
        <td>Name:</td>
        <td><input name="name" onChange={(e)=>handleInputChange(e)}type='text' value={formObject.name} placeholder="Customer Name" required></input></td>
        
      </tr>
      <tr>
        <td>Email:</td>
        <td><input name="email" onChange={(e)=>handleInputChange(e)} type='text' value={formObject.email} placeholder="Customer Email" required></input></td>
        </tr>
        <tr><td>Password:</td>
        <td><input name="password" onChange={(e)=>handleInputChange(e)} type='text' value={formObject.password} placeholder="Customer Password" required></input></td></tr>
        <tr><td><button onClick={onDeletePressed}>Delete</button><button onClick={onSavePressed}>Save</button><button onClick={onCancelPressed}>Cancel</button></td></tr>
    </tbody>
    </table>
  </div>
  
 );
  
  
}
 
export default App;
