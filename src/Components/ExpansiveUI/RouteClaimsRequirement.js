import React from 'react'
class RouteClaimsRequirement extends React.Component{

    render(){
        const {onInputChange_RouteClaimsRequirementKey, onInputChange_RouteClaimsRequirementValue}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="RouteClaimsRequirement">
				Route Claims Requirement</label>

				<label className="fw6 lh-copy f5 mr7" htmlFor="RouteClaimsRequirementKey">
				Key</label>
				<label className="fw6 f5" htmlFor="RouteClaimsRequirementValue" style={{"marginLeft": "40px"}}>
				Value</label>
				<br/>
				
				<input className="mt2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="RouteClaimsRequirementKey"  id="RouteClaimsRequirementKey1"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementKey(event, 0)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="RouteClaimsRequirementValue"  id="RouteClaimsRequirementValue1"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementValue(event, 0)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="RouteClaimsRequirementKey"  id="RouteClaimsRequirementKey2"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementKey(event, 1)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="RouteClaimsRequirementValue"  id="RouteClaimsRequirementValue2"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementValue(event, 1)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="RouteClaimsRequirementKey"  id="RouteClaimsRequirementKey3"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementKey(event, 2)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="RouteClaimsRequirementValue"  id="RouteClaimsRequirementValue3"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementValue(event, 2)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="RouteClaimsRequirementKey"  id="RouteClaimsRequirementKey4"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementKey(event, 3)}/>
				
				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="RouteClaimsRequirementValue"  id="RouteClaimsRequirementValue4"
				spellCheck="false" onChange={(event) => onInputChange_RouteClaimsRequirementValue(event, 3)}/>

				<p>
				Ocelot supports claims based authorization which is run post authentication.
				This means if you have a route you want to authorize, you can add it here.
				The authorization middleware is called and then, Ocelot will check to see
				if the user has the claim type and if the value of that claim is registered.
				If it isn’t then the user will not be authorized and the response will be 403 forbidden.
				</p>

			</div>
        )
    }
}
export default RouteClaimsRequirement