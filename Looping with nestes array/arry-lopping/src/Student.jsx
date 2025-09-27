import React from 'react'

const Stuedent = ({student}) => {
  return (
    <div>
    <h3>stuedent</h3>
            {
              student.map((item,index)=>(
                <div key={index}>
                  <ul>
                    <li>name:{item.name}</li>
                  </ul>
                </div>
              ))
            }
    </div>
  )
}

export default Stuedent