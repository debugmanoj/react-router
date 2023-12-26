import React from 'react'
import Items from './items';

function All({datas}) {

  return  <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {datas.map((e,i)=>{
            return <Items entries={e} key={i}/>
          })}
        </div>
        </div>
  
 
}

export default All