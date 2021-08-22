import React from 'react'
class RateLimitOptions extends React.Component{

    render(){
        const {onInputChange_ClientWhitelist, onInputChange_erl, onInputChange_Period,
              onInputChange_PeriodTimespan, onInputChange_Limit}=this.props
        return(
          
            <div>
                <label className="db fw6 lh-copy f5 group" htmlFor="RateLimitOptions">
                Rate Limit Options</label>
                <label className="db fw6 lh-copy f5 mb2" htmlFor="ClientWhitelist">
                Client White list</label>
                
                <input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="ClientWhitelist"  id="ClientWhitelist1" spellCheck="false"
                onChange={(event) => onInputChange_ClientWhitelist(event, 0)}/>
                <input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="ClientWhitelist"  id="ClientWhitelist2" spellCheck="false"
                onChange={(event) => onInputChange_ClientWhitelist(event, 1)}/>
                <input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="ClientWhitelist"  id="ClientWhitelist3" spellCheck="false"
                onChange={(event) => onInputChange_ClientWhitelist(event, 2)}/>
                <input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="ClientWhitelist"  id="ClientWhitelist4" spellCheck="false"
                onChange={(event) => onInputChange_ClientWhitelist(event, 3)}/>

                <p>
                This is an array that contains the whitelist of the client.
                It means that the client in this array will not be affected by the rate limiting.
                </p>

                <input type="checkbox" id="erl" name="erl" value="erl"
                className="mr2 mt4 mb2" onChange={onInputChange_erl}/>
                <label htmlFor="EnableRateLimiting" className="fw6 lh-copy f5">
                Enable Rate Limiting</label>

                <p>
                This value specifies enable endpoint rate limiting.
                </p>

                
                <label className="db fw6 lh-copy f5 mb2 mt4" htmlFor="Period">
                Period</label>
                <input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="Period"  id="Period" spellCheck="false"
                onChange={onInputChange_Period}/>

                <p>
                This value specifies the period that the limit applies to, such as 1s, 5m, 1h,1d and so on.
                If you make more requests in the period than the limit allows then you need to wait for Period Timespan
                to elapse before you make another request.
                </p>


                <label className="db fw6 lh-copy f5 mb2 mt4" htmlFor="PeriodTimespan">
                Period Time span</label>
                <input className="mb2 pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="PeriodTimespan"  id="PeriodTimespan" spellCheck="false"
                onChange={onInputChange_PeriodTimespan}/>

                <p>
                This value specifies that we can retry after a certain number of seconds.
                </p>



                <label className="db fw6 lh-copy f5 mb2 mt4" htmlFor="Limit">
                Limit</label>
                <input className="pa1 lh-copy input-reset ba b--black-20 br2 bg-transparent w-100"
                type="text" name="Limit"  id="Limit" spellCheck="false"
                onChange={onInputChange_Limit}/>

                <p>
                This value specifies the maximum number of requests that a client can make in a defined period.
                </p>

			</div>
        )
    }
}
export default RateLimitOptions