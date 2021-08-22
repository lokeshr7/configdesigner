import React from 'react'
class DownstreamHostAndPorts extends React.Component{

    render(){
        const {onInputChange_Host, onInputChange_Port}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="DownstreamHostAndPorts">
				Downstream Host And Ports</label>
				
				<label className="fw6 lh-copy f5 mr7" htmlFor="Host">
				Host</label>
				<label className="fw6 f5" htmlFor="Port" style={{"marginLeft": "30px"}}>
				Port</label>
				<br/>
			
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="Host"  id="Host1" spellCheck="false"
				onChange={(event) => onInputChange_Host(event, 0)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="Port"  id="Port1" spellCheck="false"
				onChange={(event) => onInputChange_Port(event, 0)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="Host"  id="Host2" spellCheck="false"
				onChange={(event) => onInputChange_Host(event, 1)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="Port"  id="Port2" spellCheck="false"
				onChange={(event) => onInputChange_Port(event, 1)}/>

				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="Host"  id="Host3" spellCheck="false"
				onChange={(event) => onInputChange_Host(event, 2)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="Port"  id="Port3" spellCheck="false"
				onChange={(event) => onInputChange_Port(event, 2)}/>

				<input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr5"
				type="text" name="Host"  id="Host4" spellCheck="false"
				onChange={(event) => onInputChange_Host(event, 3)}/>
				
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-40 mr3"
				type="text" name="Port"  id="Port4" spellCheck="false"
				onChange={(event) => onInputChange_Port(event, 3)}/>

				<p>Downstream Host And Ports is a collection that defines the host 
				and port of any downstream services that you wish to forward requests to. 
				Usually this will just contain a single entry but sometimes you might want 
				to load balance requests to your downstream services and Ocelot allows 
				you add more than one entry and then select a load balancer.
				</p>

			</div>
        )
    }
}
export default DownstreamHostAndPorts