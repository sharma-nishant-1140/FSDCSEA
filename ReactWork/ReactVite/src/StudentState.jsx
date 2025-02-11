import React from 'react'

function StudentState()
{

    const[count,setCount] = useState(100);

    return(
        <div>{count}</div>
    )
}

export default StudentState