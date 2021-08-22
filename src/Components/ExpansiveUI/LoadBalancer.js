import React from 'react'
class LoadBalancer extends React.Component{

    render(){
		const {onInputChange_LoadBalancer_LeastConnection,
			   onInputChange_LoadBalancer_RoundRobin,
			   onInputChange_LoadBalancer_NoLoadBalancer,
			   onInputChange_LoadBalancer_CookieStickySessions }=this.props
        return(
            <div>
			  
			  <label className="db fw6 lh-copy f5 group" htmlFor="LoadBalancer">
			  Load Balancer Settings</label>
			  <label className="db fw6 lh-copy f5 mb2" htmlFor="LoadBalancer">
			  Load Balancer</label>

			        <input type="radio" className="pa1 lh-copy mb2"
					name="LoadBalancer"  id="LeastConnection" value="LeastConnection"
					onChange={onInputChange_LoadBalancer_LeastConnection}/>
					<label className="fw6 f5 ml2 mr3" htmlFor="LeastConnection">Least Connection</label>

					<input type="radio" className="mt2 pa1 lh-copy mb2"
					name="LoadBalancer"  id="RoundRobin" value="RoundRobin"
					onChange={onInputChange_LoadBalancer_RoundRobin}/>
					<label className="fw6 f5 ml2 mr3" htmlFor="RoundRobin">Round Robin</label>

					<input type="radio" className="mt2 pa1 lh-copy mb2" defaultChecked="true"
					name="LoadBalancer"  id="NoLoadBalancer" value="NoLoadBalancer"
					onChange={onInputChange_LoadBalancer_NoLoadBalancer}/>
					<label className="fw6 f5 ml2 mr3" htmlFor="NoLoadBalancer">No Load Balancer</label>

					<input type="radio" className="mt2 mb3 pa1 lh-copy"
					name="LoadBalancer"  id="CookieStickySessions" value="CookieStickySessions"
					onChange={onInputChange_LoadBalancer_CookieStickySessions}/>
					<label className="fw6 f5 ml2" htmlFor="CookieStickySessions">Cookie Sticky Sessions</label>

				<p>
				Ocelot can load balance across available downstream services for each Route. 
				This means you can scale your downstream services and Ocelot can use them effectively.

				The type of load balancer available are: <br/><br/>

				Least Connection - tracks which services are dealing with requests
				and sends new requests to service with least existing requests. 
				The algorithm state is not distributed across a cluster of Ocelot’s. <br/><br/>

				Round Robin - loops through available services and sends requests. 
				The algorithm state is not distributed across a cluster of Ocelot’s. <br/><br/>

				No Load Balancer - takes the first available service from config or service discovery. <br/><br/>

				Cookie Sticky Sessions - uses a cookie to stick all requests to a specific server.
				</p>

			</div>
        )
    }
}
export default LoadBalancer