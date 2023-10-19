import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Suppliers() {

     const [suppliers, setSuppliers] = useState([]);

     useEffect(() => {
     axios.get('https://northwind.vercel.app/api/suppliers')
     .then(res =>{
        setSuppliers(res.data)
     })
    
       
     }, [])

     const deleteSuppliers = (id) => {
        var result = window.confirm('Silmek İstediğinize Emin misiniz');
        if(result) {
            axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
            .then(res => {
                const updatedSuppliers = suppliers.filter(item => item.id !== id);
                setSuppliers(updatedSuppliers);
            })
        }
    }
    
     

  return (
    <>
    <h1>Suppliers Length : {suppliers.length}</h1>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>CompanyName</th>
                <th>ContactName</th>
                <th>ContactTitle</th>
                

            </tr>
        </thead>
        <tbody>
            {
                suppliers && suppliers.map(item=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                        
                        <td><button onClick={()=> deleteSuppliers(item.id) }>DELETE</button></td>

                    </tr>
                })
            }
        </tbody>
    </table>
    </>
    
  )
}

export default Suppliers