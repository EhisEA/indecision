import React from 'react';


const Option=(props)=>{
    return(
    <div className="option">
        <p className="option-text"> {props.index+". "+props.optionText}</p> 
        <button 
         onClick={()=>{props.removeOption(props.optionText)}}
         className="button button--link"
        >
        remove
        </button>
    </div>
);
}

export default Option;