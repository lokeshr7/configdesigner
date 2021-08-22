import React from 'react'
class RequestIdKey extends React.Component{

    render(){
        const {onInputChange_RequestIdKey}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="RequestIdKey">
				Add Key To Request</label>
				<label className="db fw6 lh-copy f5 mb2" htmlFor="RequestIdKey">
				Request Id Key</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="RequestIdKey"  id="RequestIdKey" spellCheck="false"
				onChange={onInputChange_RequestIdKey}/>
				<p>Ocelot supports a client sending a Request Id in the form of a header.
				If set Ocelot will use the Request Id for logging as soon as it becomes
				available in the middleware pipeline. Ocelot will also forward the
				Request Id with the specified header to the downstream service.
				Once Ocelot has identified the incoming requests matching the Route object,
				it will set the Request Id.
			    </p>
			</div>
        )
    }
}
export default RequestIdKey