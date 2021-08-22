import React, {Component} from 'react';

class InputForm extends Component {
  
  render(){
  	const {keyinputChange, valueinputChange, buttonClick}=this.props
    return (
      <div className='pa2'>

      <label className="fw5 f3 mr2 ml4" htmlFor="key">Enter Key</label>
      <input
        className='mr4 pa3 ba b--green bg-lightest-blue'
        type='text'
        onChange={keyinputChange}
      />
      <label className="fw5 f3 mr2" htmlFor="value">Enter Value</label>
      <input
        className='mr5 pa3 ba b--green bg-lightest-blue'
        type='text'
        onChange={valueinputChange}
      />
      <button 
      className='pa3 bg-light-green pointer ba b--blue grow'
      type="button"
      onClick={buttonClick}>
      Submit
      </button>
     
      </div>
    )
  }
}

export default InputForm;