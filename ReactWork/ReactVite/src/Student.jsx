import React from 'react'
import './student.css'
function Student({data}) {
  return (
    // <div className='idcard'>
    //     {
    //         JSON.stringify(data)
    //     }
        
            <table border="5" >
            <tbody>
                <tr>
                    <td colspan={2}>{data.college}</td>
                </tr>
                <tr><img src={data.pic} height={250} width={250}/></tr>
                <tr>
                    <td>name</td>
                    <td>{data.name}</td>
                </tr>
                <tr><td>roll</td><td>{data.roll}</td></tr>
                <tr><td>Branch</td><td>{data.branch}</td></tr>
                <tr><td>section</td><td>{data.sec}</td></tr>
            </tbody>
         </table> 
        
  )
}
// Student.defaultProps={
//     college:"Akge"
// }

export default Student