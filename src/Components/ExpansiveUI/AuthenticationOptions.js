import React from 'react'
class AuthenticationOptions extends React.Component{

    render(){
        const {onInputChange_AuthenticationProviderKey, onInputChange_AllowedScopes}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="AuthenticationOptions">
				Authentication Options</label>

				<label className="db fw6 lh-copy f5 mb2" htmlFor="AuthenticationProviderKey">
				Authentication Provider Key</label>
				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="AuthenticationProviderKey"  id="AuthenticationProviderKey"
				spellCheck="false" onChange={onInputChange_AuthenticationProviderKey}/>
				<p> The Key is the scheme that this provider has been registered
					with. We then map this to the Route in the configuration</p>

				<label className="db fw6 lh-copy f5 mb2 mt4" htmlFor="AllowedScopes">
				Allowed Scopes</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="AllowedScopes"  id="AllowedScopes1"
				spellCheck="false" onChange={(event) => onInputChange_AllowedScopes(event, 0)}/>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="AllowedScopes"  id="AllowedScopes2"
				spellCheck="false" onChange={(event) => onInputChange_AllowedScopes(event, 1)}/>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="AllowedScopes"  id="AllowedScopes3"
				spellCheck="false" onChange={(event) => onInputChange_AllowedScopes(event, 2)}/>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="AllowedScopes"  id="AllowedScopes4"
				spellCheck="false" onChange={(event) => onInputChange_AllowedScopes(event, 3)}/>
				<p>This is a way to restrict access to a Route on a per scope basis.</p>
			</div>
        )
    }
}
export default AuthenticationOptions