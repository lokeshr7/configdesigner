import React, {Component} from 'react';
import InputForm from './InputForm';
var consul = require('consul')();

const initialState = {
	key: '',
	value: '',
}

class Consul extends Component {
	
	constructor(){
		super()
		this.state=initialState
	}

	onKeyInputChange = (event) => {
    this.setState({ key: event.target.value })
  }

  onValueInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  onButtonClick = () => {
  	if(this.state.value.length===0){
    consul.kv.get(this.state.key, function(err, result) {
	    if (result === undefined) 
	    	console.log('key not found');
	    else{
	    let obj = JSON.parse(result.Value)
	    console.log('key:',result.Key)
	    console.log('value:', obj.value)
	    }
    })
    }
    else{
    	let myJSONValue = JSON.stringify ({value: this.state.value} )
    	consul.kv.set(this.state.key, myJSONValue, function(err, result) {
	      if (result === false) 
	    	  console.log('Error');
	      else{
	        console.log(result)
	      }
      })
   }
    const input = document.getElementsByTagName('input')[0]
    input.value=""
    const input1 = document.getElementsByTagName('input')[1]
    input1.value=""
    this.setState({key:'',value:''})
  }
  
  render(){
    return (
      <div>
        <InputForm 
        keyinputChange={this.onKeyInputChange}
        valueinputChange={this.onValueInputChange}
        buttonClick={this.onButtonClick} 
        />
      </div>
    )
  }
}

export default Consul;