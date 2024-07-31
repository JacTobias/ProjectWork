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

  useEffect(()=> {getCustomers()}, [formObject])

  const getCustomers = function(){
    setCustomers(getAll())
  }

  const  onCancelPressed = function(){
    setFormObject(blank);
  }
  const onSavePressed = function(){
    console.log("Save pressed")
  }
  const onDeletePressed = function(){
    console.log("Delete")
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
        <td>{formObject.name}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{formObject.email}</td>
        </tr>
        <tr><td>Password:</td><td>{formObject.password}</td></tr>
        <tr><td><button onClick={onDeletePressed}>Delete</button><button onClick={onSavePressed}>Save</button><button onClick={onCancelPressed}>Cancel</button></td></tr>
    </tbody>
    </table>
  </div>
  
 );
  
  
}
 
export default App;
