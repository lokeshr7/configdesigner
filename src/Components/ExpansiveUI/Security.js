import React from 'react'
class Security extends React.Component{

    render(){
        const {onInputChange_daascv}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="Security">
				Security</label>
				<input type="checkbox" id="daascv" name="daascv" value="daascv"
				className="mr2" onChange={onInputChange_daascv}/>
				<label htmlFor="daascv" className="fw6 lh-copy f5 mb2">
				Dangerous Accept Any Server Certificate Validator</label>

				<p>Set this to true if you want to ignore SSL warnings/errors.
				We don’t recommend doing this, we suggest creating your own certificate and then getting
				it trusted by your local/remote machine if you can.
				</p>
			</div>
        )
    }
}
export default Security