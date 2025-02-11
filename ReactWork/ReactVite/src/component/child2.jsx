import React from 'react'
import Child3 from './child3';

function Child2({data})
{
    console.log(data);
    
    return(
        <div><h3>Child1</h3>
        Name = {data.name}
        <br />
        Branch = {data.branch}
        <br />
        Section = {data.section}
            <Child3 data = {data}/>
        </div>
    )
}

export default Child2;