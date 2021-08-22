import React from 'react'
class RouteOptions extends React.Component{

    render(){
        const {onInputChange_rics}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="RouteOptions">
				Route Options</label>
				<input type="checkbox" id="rics" name="rics" value="rics"
				className="mr2" onChange={onInputChange_rics}/>
				<label htmlFor="rics" className="fw6 lh-copy f5">
				Route Is Case Sensitive</label>
				<p>If this box is checked, then it means that, when Ocelot tries to match the
					incoming upstream url with an upstream template the evaluation will be case sensitive.
				</p>
			</div>
        )
    }
}
export default RouteOptions