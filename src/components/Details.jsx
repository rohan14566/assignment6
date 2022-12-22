import React, { useState } from 'react'
import { createContext } from 'react'


export const datas = createContext();
const Details = (props) => {

    const [Data, setData] = useState([
        {
            id: 0,
            name : "virat",
            age : "21",
            course : "MERN" ,
            batch : "March"
        },
        {
            id: 1,
            name : "Sachin",
            age : "13",
            course : "MEAN" ,
            batch : "April"
        },
        {
            id: 2,
            name : "Rohit",
            age : "22",
            course : "MEVN" ,
            batch : "January"
        },
        {
            id: 3,
            name : "Ram",
            age : "26",
            course : "MERN" ,
            batch : "May"
        },
        {
            id: 4,
            name : "hardhik",
            age : "28",
            course : "MEAN" ,
            batch : "September"
        }
    ])

  return (
    <div>
        <datas.Provider value={[Data,setData]}>
            {
                props.children
            }
        </datas.Provider>

    </div>
  )
}

export default Details;