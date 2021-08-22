import React from 'react'
class ConsulKey extends React.Component{

    render(){
        const {onInputChange_ConsulKey}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="Consul">
				Consul</label>
				<label className="db fw6 lh-copy f5 mb2" htmlFor="ConsulKey">
				Consul Key Name</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="ConsulKey"  id="ConsulKey" spellCheck="false"
				onChange={onInputChange_ConsulKey}/>
				<p>
                A friendly name, title, date, version or any other short description
                that helps you recognize the JSON file when opened.
                </p>
			</div>
        )
    }
}
export default ConsulKey