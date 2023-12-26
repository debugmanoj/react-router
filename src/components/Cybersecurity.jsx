import React from 'react'
import Items from './items';

function Cybersecurity({datas}) {
    console.log("I am datas")
    const filteredData = datas.filter((e)=> e.course === "Cyber");
    return  <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredData.map((e,i)=>{
              return <Items entries={e} key={i}/>
            })}
          </div>
          </div>
     
}

export default Cybersecurity