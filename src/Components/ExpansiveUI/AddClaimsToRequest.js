import React from 'react'
class AddClaimsToRequest extends React.Component{

    render(){
        const {onInputChange_AddClaimsToRequestKey, onInputChange_AddClaimsToRequestValue}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="AddClaimsToRequest">
				Add Claims To Request</label>

				<label className="fw6 lh-copy f5 mr7" htmlFor="AddClaimsToRequestKey">
				Key</label>
				<label className="fw6 f5" htmlFor="AddClaimsToRequestValue" style={{"marginLeft": "40px"}}>
				Value</label>
				<br/>
			
				<input className="mt2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddClaimsToRequestKey"  id="AddClaimsToRequestKey1"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestKey(event, 0)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddClaimsToRequestValue"  id="AddClaimsToRequestValue1"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestValue(event, 0)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddClaimsToRequestKey"  id="AddClaimsToRequestKey2"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestKey(event, 1)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddClaimsToRequestValue"  id="AddClaimsToRequestValue2"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestValue(event, 1)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddClaimsToRequestKey"  id="AddClaimsToRequestKey3"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestKey(event, 2)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddClaimsToRequestValue"  id="AddClaimsToRequestValue3"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestValue(event, 2)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddClaimsToRequestKey"  id="AddClaimsToRequestKey4"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestKey(event, 3)}/>
				
				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddClaimsToRequestValue"  id="AddClaimsToRequestValue4"
				spellCheck="false" onChange={(event) => onInputChange_AddClaimsToRequestValue(event, 3)}/>

				<p>
				These entries specify how Ocelot should transform Claims to Claims.
				The key entered here is going to become the key of the claim.
				The value of the entry is parsed to logic that will perform the transform.
				Given below are the steps to enter 'value' with an example: <br/><br/>
				First of all a dictionary accessor is specified e.g. Claims[CustomerId]. 
				This means we want to access the claims and get the CustomerId claim type.<br/><br/> 
				Next is a greater than (>) symbol which is just used to split the string.<br/><br/>
				The next entry is either value or value with an indexer.
				If value is specified Ocelot will just take the value and add it to the transform.
				If the value has an indexer Ocelot will look for a delimiter which is 
				provided after another greater than symbol.
				Ocelot will then split the value on the delimiter and add whatever 
				was at the index requested to the transform.
				</p>

			</div>
        )
    }
}
export default AddClaimsToRequest