import React from 'react'
class HttpHandlerOptions extends React.Component{

    render(){
        const {onInputChange_aar, onInputChange_ucc, onInputChange_ut, onInputChange_MaxConnectionsPerServer}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="HttpHandlerOptions">
				Http Handler Options</label>

				<input type="checkbox" id="aar" name="aar" value="aar"
				className="mr2 mb3 mt2" onChange={onInputChange_aar}/>
				<label htmlFor="AllowAutoRedirect" className="fw6 lh-copy f5">
				Allow Auto Redirect</label>
				<br/>

				<p>
				AllowAutoRedirect is a value that indicates whether the request
				should follow redirection responses. Set it true if the request should
				automatically follow redirection responses from the 
				Downstream resource; otherwise false. The default value is false.
				</p>

				<input type="checkbox" id="ucc" name="ucc" value="ucc"
				className="mr2 mb3 mt4" onChange={onInputChange_ucc}/>
				<label htmlFor="UseCookieContainer" className="fw6 lh-copy f5">
				Use Cookie Container</label>
				<br/>

				<p>UseCookieContainer is a value that indicates whether the handler 
				uses the CookieContainer property to store server cookies and 
				uses these cookies when sending requests. The default value is false.
				Please note that if you are using the CookieContainer Ocelot caches
				the HttpClient for each downstream service. This means that all requests
				to that DownstreamService will share the same cookies.
				</p>

				<input type="checkbox" id="ut" name="ut" value="ut"
				className="mr2 mb3 mt4" defaultChecked="checked" onChange={onInputChange_ut}/>
				<label htmlFor="UseTracing" className="fw6 lh-copy f5">
				Use Tracing</label>
				<br/>

				<p>Set this as true if you wish to trace a Route.</p>

				<label className="db fw6 lh-copy f5 mb2 mt4" htmlFor="MaxConnectionsPerServer">
				Max Connections Per Server</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="MaxConnectionsPerServer"  id="MaxConnectionsPerServer"
				spellCheck="false" onChange={onInputChange_MaxConnectionsPerServer}/>
				<p>This controls how many connections the internal HttpClient will open.</p>
			</div>
        )
    }
}
export default HttpHandlerOptions