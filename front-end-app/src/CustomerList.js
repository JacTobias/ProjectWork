

export function CustomerList(params){
    return(
        <div className="boxed">
        <h4>Customer List</h4>
        <table border='1px black'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
        <tbody>
            {params.customer.map(
          (item, index)=>{
            return(<tr key={index} className={(item.id===params.formObject.id)? 'selected':''} onClick={()=>params.handleCustomerClick(item)}>
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

