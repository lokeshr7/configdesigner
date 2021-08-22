import React from 'react'
class SchemeType extends React.Component{

    render(){
        const {onInputChange_DownstreamScheme_http, onInputChange_DownstreamScheme_https}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="SchemeType">
				Scheme Type</label>
				<label className="db fw6 lh-copy f5 mb3" htmlFor="DownstreamScheme">
				Downstream Scheme</label>

				<input type="radio" className="pa1 lh-copy"
				name="DownstreamScheme"  id="http" value="http" defaultChecked="true"
				onChange={onInputChange_DownstreamScheme_http}/>
				<label className="fw6 f5" htmlFor="http"> http</label>

				<input type="radio" className="ml5 pa1 lh-copy"
				name="DownstreamScheme"  id="https" value="https"
				onChange={onInputChange_DownstreamScheme_https}/>
				<label className="fw6 f5 mb2" htmlFor="https"> https</label>
				<p> Please select the appropriate option depending upon what scheme the
					mentioned Downstream Path URL uses.
				</p>
			</div>
        )
    }
}
export default SchemeType