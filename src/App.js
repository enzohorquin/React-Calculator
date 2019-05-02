import React from 'react';
import Button from './Components/Button/Button';
import './App.css';
import ClearButton from './Components/ClearButton/ClearButton';
import * as math from "mathjs";

 
export class App extends React.Component {
  constructor(){
    super();
    this.state = {
      seleccionado:0, 
      resultado:0,
    }

  }

  handleNumber = (number) => {
  if(this.state.resultado === 0){
    this.setState({resultado: number});
  }
  else 
    {this.setState({resultado: this.state.resultado+ number});
}
  }
  handleClear = () => {
    this.setState({resultado:0});

   
  }
  handleEqual = () => {
    this.setState({resultado: math.eval(this.state.resultado)})
  }


render(){
  return (
    <div className="app">
        <div className="calc-wrapper" >
        <div className="resultado">
        {this.state.resultado}
        </div>
          <div className="row-clear">
            <ClearButton handleClick={this.handleClear}children="AC" />
            <Button handleClick={this.handleNumber} children="/" />
          </div>
          <div className="row">
            <Button handleClick={this.handleNumber} children="7" />
            <Button handleClick={this.handleNumber} children="8" />
            <Button handleClick={this.handleNumber} children="9" />
            <Button handleClick={this.handleNumber} children="*" />
        </div>
        <div className="row">
           <Button handleClick={this.handleNumber} children="4" />
           <Button handleClick={this.handleNumber} children="5" />
           <Button handleClick={this.handleNumber} children="6" />
           <Button handleClick={this.handleNumber}children="-" />
        </div>
        <div className="row">
          <Button handleClick={this.handleNumber} children="1" />
          <Button handleClick={this.handleNumber} children="2" />
          <Button handleClick={this.handleNumber} children="3" />
          <Button handleClick={this.handleNumber} children="+" />
        </div>
        <div className="row">
          <Button handleClick={this.handleNumber} children="0" />
          <Button handleClick={this.handleNumber} children="." />
          <Button handleClick={this.handleEqual}children="=" />
        </div>
        </div>
        
      
    </div>
  );
}
}
export default App;
