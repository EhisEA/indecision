import React from 'React';

const Actions = (props)=>{
    return(
        <div>
        <button onClick={props.selectOption} 
        disabled={!!props.active}
        className="big-button">
        What should i do
        </button>
    </div>
);
};

export default Actions;