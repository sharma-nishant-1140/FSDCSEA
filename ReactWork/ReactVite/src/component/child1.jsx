import React from 'react'
import Child2 from './child2';

function Child1({data})
{
    // console.log(data);
    return(
        <div><h3>Child1</h3>
        Name = {data.name}
        <br />
        Branch = {data.branch}
        <br />
        Section = {data.section}
            <Child2 data={data} />
        </div>
    )
}

export default Child1;