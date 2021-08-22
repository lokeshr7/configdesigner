import React from 'react'
class AddHeadersToRequest extends React.Component{

    render(){
		const {onInputChange_AddHeadersToRequestKey, 
			   onInputChange_AddHeadersToRequestValue}=this.props

        return(

            <div>
				
				<label className="db fw6 lh-copy f5 group" htmlFor="AddHeadersToRequest">
				Add Headers To Request</label>
				<label className="fw6 lh-copy f5 mr7" htmlFor="AddHeadersToRequestKey">
				Key</label>
				<label className="lh-copy fw6 f5" htmlFor="AddHeadersToRequestValue" style={{"marginLeft": "40px"}}>
				Value</label>
				<br/>

				<input className="mt2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddHeadersToRequestKey"  id="AddHeadersToRequestKey1"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestKey(event, 0)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddHeadersToRequestValue"  id="AddHeadersToRequestValue1"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestValue(event, 0)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddHeadersToRequestKey"  id="AddHeadersToRequestKey2"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestKey(event, 1)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddHeadersToRequestValue"  id="AddHeadersToRequestValue2"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestValue(event, 1)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddHeadersToRequestKey"  id="AddHeadersToRequestKey3"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestKey(event, 2)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddHeadersToRequestValue"  id="AddHeadersToRequestValue3"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestValue(event, 2)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="AddHeadersToRequestKey"  id="AddHeadersToRequestKey4"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestKey(event, 3)}/>
				
				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="AddHeadersToRequestValue"  id="AddHeadersToRequestValue4"
				spellCheck="false" onChange={(event) => onInputChange_AddHeadersToRequestValue(event, 3)}/>

				<p>
				These entries specify how Ocelot should transform Claims to Headers.
				The key entered here is going to become the key of the header.
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
export default AddHeadersToRequest