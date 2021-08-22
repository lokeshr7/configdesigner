import React from 'react'
class PathTemplate extends React.Component{

    render(){
        const {onInputChange_DownstreamPathTemplate, onInputChange_UpstreamPathTemplate}=this.props
        return(

            <div>

                <div>
                    <label className="db fw6 lh-copy f5 group" htmlFor="PathTemplate">
                    Path Template</label>
                    <label className="db fw6 lh-copy f5 mb2" htmlFor="DownstreamPathTemplate">
                    Downstream Path Template</label>
                    <input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                    type="text" name="DownstreamPathTemplate"  id="DownstreamPathTemplate"
                    onChange={onInputChange_DownstreamPathTemplate} spellCheck="false"/>
                    <p>The Downstream Path Template defines the URL that a request will be forwarded to.</p>
                </div>

                <div className="mt3">
                    <label className="db fw6 lh-copy f5 mb2" htmlFor="UpstreamPathTemplate">
                    Upstream Path Template</label>
                    <input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                    type="text" name="UpstreamPathTemplate"  id="UpstreamPathTemplate"
                    onChange={onInputChange_UpstreamPathTemplate} spellCheck="false"/>
                    
                    <p>The Upstream Path Template is the URL that Ocelot will use to identify 
                        which Downstream Path Template to use for a given request.</p>
                </div>

            </div>
        )
    }
}
export default PathTemplate