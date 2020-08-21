import React from 'react';
import Option from './Option';

const Options=(props)=>{
   return(
      <div> 
            <div className="widget-header">
                <h3 className="widget-header__title">Your Option</h3>
                <button   
                 onClick={props.removeAll} 
                 className="button button--link"
                >
                Remove All
                </button>
            </div>
            <div>
                {props.options.length ===0 && <p className="widget__message">Please add some options</p>}
                {props.options.map((opt, index)=>{
                    return( 
                        <Option 
                        optionText={opt}
                        index={index+1}
                        removeOption={props.removeOption}
                        />
                        
                    )})
                }
            </div>
       </div>
   );
};

export default Options;













// {
//     app.options.map((option) =>
//         <li key = {
//             option
//         }> 
//         {
//             option
//         }
//          </li>
//     )
// }