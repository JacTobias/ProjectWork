export function CustomerForm(params){
    return(
      <div className='form'>
    <table  bgcolor='#d4b8f5'>
    <thead >
      <div bgcolor='#d4b8f5'>{params.mode}</div>
    </thead>
    <tbody >
      <tr>
        <td bgcolor="#ffffff">Name:</td>
        <td><input name="name" onChange={(e)=>params.handleInputChange(e)} type='text' value={params.formObject.name} placeholder="Customer Name"/></td>
      </tr>
      <tr>
        <td bgcolor="#ffffff">Email:</td>
        <td><input name="email" onChange={(e)=>params.handleInputChange(e)} type='text' value={params.formObject.email} placeholder="Customer Email"/></td>
        </tr>
        <tr><td bgcolor="#ffffff">Password:</td>
        <td><input name="password" onChange={(e)=>params.handleInputChange(e)} type='text' value={params.formObject.password} placeholder="Customer Password"/></td></tr>
        <tr><td>
          <button className='button' onClick={params.onDeletePressed}>Delete</button></td><td><button className='button' onClick={params.onSavePressed}>Save</button></td><td><button className='button' onClick={params.onCancelPressed}>Cancel</button></td></tr>
    </tbody>
    </table>
  </div>
    );
}