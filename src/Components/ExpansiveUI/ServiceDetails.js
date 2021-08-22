import React from 'react'
class ServiceDetails extends React.Component{

    render(){
        const {onInputChange_ServiceName}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="Service">
				Service Details</label>
				<label className="db fw6 lh-copy f5 mb2" htmlFor="ServiceName">
				Service Name</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="ServiceName"  id="ServiceName" spellCheck="false"
				onChange={onInputChange_ServiceName}/>
				<p>If you have services deployed in Service Fabric you will normally use the naming service to access them.</p>
			</div>
        )
    }
}
export default ServiceDetails