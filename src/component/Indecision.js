import React from 'react';
import Header from './Header';
import Action from './Action.js';
import Options from './Options.js';
import AddOption from './AddOption';

export default class Indecision extends React.Component{

constructor(props){
    super(props);
    this.removeAll= this.removeAll.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.title= "Indecision App";
    this.subtitle= "let the computer help you make a good decision";

   
    this.state={
        options:["emmanuel", "ehis"],
        pickOption:'',
    };
}


removeAll(){
    this.setState(()=>{
         return{
             options:[]
         }
});
}

removeOption(optionToRemove){
    this.setState((prevState)=>{
        return{
            options: prevState.options.filter((option)=>{
            return option !== optionToRemove;
        
    })
}
    });
    
}
selectOption(){
    const rand= Math.floor(Math.random()*this.state.options.length);
    const picked= this.state.options[rand];
    this.setState(()=>{
        return{
        pickOption: picked
    };});
    alert(picked);
}
addOption(option){
    if(option===""){
        return("Enter a value")
    }else if(this.state.options.indexOf(option) >-1){
        return("this option already exist");
    }

    this.setState((prevState)=>{
        return{
           options: prevState.options.concat(option)
        }
    })

}
    render(){
        return(
            <div>
                <Header title={this.title} >
                {this.subtitle}
                </Header>
                <div className="container">
                    <Action 
                    selectOption={this.selectOption}
                    active={this.state.options > -1} />
                    <div className="widget">
                        <Options 
                        removeAll={this.removeAll}
                        options={this.state.options} 
                        removeOption={this.removeOption}/>
                        <AddOption addOption={this.addOption} />
                    </div>
                </div>              
            </div>
        );
    }


}


