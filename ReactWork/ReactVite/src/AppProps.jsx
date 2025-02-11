import React from 'react'
import Child1 from './component/child1';

export const AppProps = () => {
    const data = {
        name : "Nishant",
        branch : "CSE",
        section : "A"
    };
  return (
    <div>
        <Child1 data={data} />
    </div>
  )
}
