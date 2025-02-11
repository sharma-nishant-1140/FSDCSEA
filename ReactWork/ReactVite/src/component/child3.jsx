import React from 'react'

function Child3({data})
{
    console.log(data);
    return(
        <div><h3>Child1</h3>
        Name = {data.name}
        <br />
        Branch = {data.branch}
        <br />
        Section = {data.section}</div>
    )
}

export default Child3;