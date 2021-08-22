import React from 'react'
class AddQueriesToRequest extends React.Component{

    render(){
		
		const { onInputChange_UpstreamHttpMethod_get,
			    onInputChange_UpstreamHttpMethod_put,
			    onInputChange_UpstreamHttpMethod_post,
				onInputChange_UpstreamHttpMethod_delete,
				onInputChange_DownstreamHttpMethod_get,
			    onInputChange_DownstreamHttpMethod_put,
			    onInputChange_DownstreamHttpMethod_post,
				onInputChange_DownstreamHttpMethod_delete,
				onInputChange_DownstreamHttpVersion_10,
				onInputChange_DownstreamHttpVersion_11,
				onInputChange_DownstreamHttpVersion_20 }=this.props
		
		return(

            <div>
				
				<label className="db fw6 lh-copy f5 group" htmlFor="HttpMethodAndVersion">
				HTTP Method And Version</label>
				
					<div>

					    <label className="db fw6 lh-copy f5 mb3" htmlFor="UpstreamHttpMethod">
					    Upstream Http Method</label>

						<input type="checkbox" id="get" name="get" value="get"
						 onChange={onInputChange_UpstreamHttpMethod_get}/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="get">
						Get</label>

						<input type="checkbox" id="put" name="put" value="put"
						onChange={onInputChange_UpstreamHttpMethod_put}/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="put">
						Put</label>

						<input type="checkbox" id="post" name="post" value="post"
						onChange={onInputChange_UpstreamHttpMethod_post}/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="post">
						Post</label>

						<input type="checkbox" id="delete" name="delete" value="delete"
						onChange={onInputChange_UpstreamHttpMethod_delete}/>
						<label className="fw6 lh-copy f5 mb2 ml2" htmlFor="delete">
						Delete</label>

						<p>The Upstream Http Method is used so Ocelot can distinguish between requests
							with different HTTP verbs to the same URL. 
							You can set a specific list of HTTP Methods or set an empty list to allow any of them.
						</p>

			        </div>

			        <div className="mt4">

			            <label className="db fw6 lh-copy f5 mb3" htmlFor="DownstreamHttpMethod">
			            Downstream Http Method</label>

			            <input type="radio" id="get" name="DownstreamHttpMethod" value="get"
						onChange={onInputChange_DownstreamHttpMethod_get} defaultChecked="true"/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="get">
						Get</label>

						<input type="radio" id="put" name="DownstreamHttpMethod" value="put"
						onChange={onInputChange_DownstreamHttpMethod_put}/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="put">
						Put</label>

						<input type="radio" id="post" name="DownstreamHttpMethod" value="post"
						onChange={onInputChange_DownstreamHttpMethod_post}/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="post">
						Post</label>

						<input type="radio" id="delete" name="DownstreamHttpMethod" value="delete"
						onChange={onInputChange_DownstreamHttpMethod_delete}/>
						<label className="fw6 lh-copy f5 mb2 mr5 ml2" htmlFor="delete">
						Delete</label>

						<p>Ocelot allows you to change the HTTP request method that will be 
						   used when making a request to a downstream service.</p>

			        </div>
			   

			    <div className="mt4">

					<label className="db fw6 lh-copy f5 mb3" htmlFor="DownstreamHttpVersion">
					Downstream Http Version</label>

					<input type="radio" className="pa1 lh-copy"
					name="DownstreamHttpVersion"  id="http" value="http"
					onChange={onInputChange_DownstreamHttpVersion_10}/>
					<label className="fw6 f5 mb2 ml2 mr5" htmlFor="http">1.0</label>

					<input type="radio" className="pa1 lh-copy"
					name="DownstreamHttpVersion"  id="https" value="https"
					onChange={onInputChange_DownstreamHttpVersion_11}/>
					<label className="fw6 f5 mb2 ml2 mr5" htmlFor="https">1.1</label>

					<input type="radio" className="pa1 lh-copy" defaultChecked="true"
					name="DownstreamHttpVersion"  id="https" value="https"
					onChange={onInputChange_DownstreamHttpVersion_20}/>
					<label className="fw6 f5 mb2 ml2" htmlFor="https">2.0</label>

					<p>Ocelot allows you to choose the HTTP version it will use to make the proxy request.
					It can be set as 1.0, 1.1 or 2.0</p>

			    </div>

		    </div>

        )
    }
}
export default AddQueriesToRequest