import logo from './logo.svg';
import './App.css';
import { CustomerList } from './CustomerList';
import React, {useState, useEffect} from 'react'
import {CustomerForm} from './CustomerForm';
import {getAll, get, deleteById,post,put} from './memdb.js'


 
function App() {
  let blank={"id":-1,"name":"","email":"","password":""};
  const [customer, setCustomers] = useState([])
  const [formObject, setFormObject]=useState(blank)
  const mode = (formObject.id >= 0)? "Update" : "Add";

  useEffect(()=> {getCustomers()}, [formObject])

  const getCustomers = function(){
    setCustomers(getAll())
  }

  const  onCancelPressed = function(){
    console.log("cancel pressed")
    setFormObject(blank);
    console.log(formObject)
  }
  const onSavePressed = function(){
    console.log("Save pressed")
    if (mode === 'Add'){
      post(formObject);
      setFormObject(blank);
    }
    if (mode === 'Update'){
      put(formObject.id, formObject);
      setFormObject(blank);
    }
    console.log(formObject)
    
  }
  const onDeletePressed = function(){
    console.log("delete")
    //console.log(formObject)
    if (formObject.id >= 0) {
      deleteById(formObject.id);
      setFormObject(blank);
    } else {
      setFormObject(blank);
    }
    console.log(formObject)
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
    <div className='app'>
      <CustomerList
      customer={customer}
      formObject={formObject}
      handleCustomerClick={handleCustomerClick}
      />
      <CustomerForm
      formObject={formObject}
      onDeletePressed={onDeletePressed}
      onCancelPressed={onCancelPressed}
      onSavePressed={onSavePressed}
      mode={mode}
      handleInputChange={handleInputChange}
      />
    </div>
  
  
  
 );
  
  
}
 
export default App;
