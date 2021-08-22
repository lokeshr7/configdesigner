import React from 'react'
class FileCacheOptions extends React.Component{

    render(){
        const {onInputChange_TtlSeconds, onInputChange_Region}=this.props
        return(
            <div>
				<label className="db fw6 lh-copy f5 group" htmlFor="FileCacheOptions">
				File Cache Options</label>
				<label className="db fw6 lh-copy f5 mb2" htmlFor="TtlSeconds">
				Ttl Seconds</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="TtlSeconds"  id="TtlSeconds" spellCheck="false"
				onChange={onInputChange_TtlSeconds}/>
				<p>The time after which the cache will expire.</p>

				<label className="db fw6 lh-copy f5 mb2 mt3" htmlFor="Region">
				Region</label>
				<input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
				type="text" name="Region"  id="Region" spellCheck="false"
				onChange={onInputChange_Region}/>
				<p>This clears a region of the cache after the mentioned Ttl Seconds.</p>
			</div>
        )
    }
}
export default FileCacheOptions