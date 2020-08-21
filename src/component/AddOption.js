import React from 'react';

export default class AddOption extends React.Component{
constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state={
        error:undefined
    }
}


addOption(e){
    e.preventDefault();
    const option= e.target.elements.newOption.value.trim();
    console.log("in");
    const error= this.props.addOption(option);
    this.setState(()=>{
       return{
        error:error
       }
       
    });
    if(!error){
        e.target.elements.newOption.value="";
    }
}
    render(){
       return( 
           <div>
           
                 
                {this.state.error && <p className="addOption-error">{this.state.error}</p>}
                <form onSubmit={this.addOption} className="addOption">
                    <input type="text" name="newOption" className="addOption-input" />
                    <button className="button">Add Option</button>
                </form>
             </div>
);
    }
}