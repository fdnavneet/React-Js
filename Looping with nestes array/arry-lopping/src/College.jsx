import React from 'react'
import Stuedent from './Student'

const College = ({college}) => {
  return (
    <div>
       <h2>college name:{college.name}</h2>
        <ul>
          <li>
            <h2>city:{college.city}</h2>
          </li>
        </ul>
        <ul>
          <li>
            <h2>website:{college.website}</h2>
          </li>
          <li>

            < Stuedent student={college.student} />
          </li>
        </ul>
    </div>
  )
}

export default College