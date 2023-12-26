import React from "react"

function items({entries}){
    
    return <div className="col">
    <div className="card h-100">
        <img className="card-img-top" src={entries.img} alt="AI image"/>
        <div className="card-body">
            <p className="card-text text-center font-weight-bold">{entries.title}</p>
        </div>
    </div>
    
  </div>
  }
  export default items