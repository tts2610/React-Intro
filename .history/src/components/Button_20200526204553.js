import React from 'react'

export default function Button({handleClick,type}){
    return (
        <div>
            <button type="button" className="btn btn-info ml-5 text-capitalize" onClick={handleClick(type.toLowerCase())} >{type}</button>
        </div>  
    );
}