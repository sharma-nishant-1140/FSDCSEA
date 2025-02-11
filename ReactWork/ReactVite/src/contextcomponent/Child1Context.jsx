import React, { useContext } from 'react'
import { mycontext } from '../AppContext';

function Child1Context() {
  const childcontext=useContext(mycontext);
  return (
    <div>Child1
      <hr />
      <div>
     branch:{childcontext.branch}
      </div>
    </div>
  )
}

export default Child1Context