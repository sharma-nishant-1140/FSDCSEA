import React, {createContext} from 'react'
import Child1Context from './contextcomponent/Child1Context';

const mycontext = createContext();
function AppContext() {
    const data = {
        name : "Nishant",
        branch : "CSE",
        section : "A"
    }
  return (
    <div><h2>AppContext</h2>
        <mycontext.Provider value = {data}>
            <Child1Context />
        </mycontext.Provider>
    </div>
  )
}

export{
    mycontext
}

export default AppContext