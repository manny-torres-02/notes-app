import React from 'react'

const Record = (props) => (
    <div>
        {props.users.map((data)=> (
            <div>
            <h1>{data}</h1>
            <h1>TEST</h1>
            <button>Delete</button>
            </div>
        ))}
      
    </div>
)

export default Record