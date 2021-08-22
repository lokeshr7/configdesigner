import React from 'react'
class QosOptions extends React.Component{

    render(){
        const {onInputChange_ExceptionsAllowedBeforeBreaking, 
              onInputChange_DurationOfBreak, onInputChange_TimeoutValue }=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="QosOptions">
				Qos Options</label>
				<label className="db fw6 lh-copy f5 mb2" htmlFor="ExceptionsAllowedBeforeBreaking">
				Exceptions Allowed Before Breaking</label>
				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="ExceptionsAllowedBeforeBreaking"  id="ExceptionsAllowedBeforeBreaking"
				spellCheck="false" onChange={onInputChange_ExceptionsAllowedBeforeBreaking}/>
				
				<p>You must set a number greater than 0 against Exceptions Allowed Before Breaking
				for this rule to be implemented. 
				</p>

				<label className="mt3 db fw6 lh-copy f5 mb2" htmlFor="DurationOfBreak">
				Duration Of Break</label>
				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="DurationOfBreak"  id="DurationOfBreak" spellCheck="false"
				onChange={onInputChange_DurationOfBreak}/>
				
				<p>
				Duration of break means the circuit breaker will stay open for the 
				given number of milliseconds after it is tripped.
				</p>

				<label className="mt3 db fw6 lh-copy f5 mb2" htmlFor="TimeoutValue">
				Timeout Value</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="TimeoutValue"  id="TimeoutValue" spellCheck="false"
				onChange={onInputChange_TimeoutValue}/>

				<p>
				TimeoutValue means if a request takes more than the given number of milliseconds 
				it will automatically be timed out.
				</p>
			</div>

        )
    }
}
export default QosOptions