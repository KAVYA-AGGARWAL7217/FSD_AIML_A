import React from 'react'
import Child1 from './Child1'
import { createContext } from 'react'
const Parent = () => {
    const stu={name:'ABC',
        age:23,
    }
    c
  return (
    <div>
        <h1>Parent Components</h1>
        <Child1 student={stu}/>
    </div>
  )
}

export default Parent