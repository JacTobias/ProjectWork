

export function CustomerList(params){
    return(
        <div className='customertable'>
        <h3 className='list'>Customer List</h3>
        <table  bgcolor='#d4b8f5'>
            <thead bgcolor='#d4b8f5'>
                <tr >
                    <th >Name</th>
                    <th >Email</th>
                    <th >Password</th>
                </tr>
            </thead>
        <tbody>
            {params.customer.map(
          (item, index)=>{
            return(<tr bgcolor="#ffffff" key={index} className={(item.id===params.formObject.id)? 'selected':''} onClick={()=>params.handleCustomerClick(item)}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              </tr>
            )
          }
        )}
        </tbody>
        </table>
        </div>
    );
};

