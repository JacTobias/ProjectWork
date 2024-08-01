export function CustomerForm(params){
    return(
        <div>
    <div id='data'></div>
    <h4>Customer List</h4>
    <h3>{params.mode}</h3>
    <table border='1px black'>
    <thead>
      <tr><td>Update</td></tr>
    </thead>
    <tbody>
      <tr>
        <td>Name:</td>
        <td><input name="name" onChange={(e)=>params.handleInputChange(e)} type='text' value={params.formObject.name} placeholder="Customer Name"/></td>
      </tr>
      <tr>
        <td>Email:</td>
        <td><input name="email" onChange={(e)=>params.handleInputChange(e)} type='text' value={params.formObject.email} placeholder="Customer Email"/></td>
        </tr>
        <tr><td>Password:</td>
        <td><input name="password" onChange={(e)=>params.handleInputChange(e)} type='text' value={params.formObject.password} placeholder="Customer Password"/></td></tr>
        <tr><td>
          <button onClick={params.onDeletePressed}>Delete</button><button onClick={params.onSavePressed}>Save</button><button onClick={params.onCancelPressed}>Cancel</button></td></tr>
    </tbody>
    </table>
  </div>
    );
}