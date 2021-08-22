import React from 'react'
import './Config.css'
import AddHeadersToRequest from './AddHeadersToRequest'
import AddClaimsToRequest from './AddClaimsToRequest'
import RouteClaimsRequirement from './RouteClaimsRequirement'
import AddQueriesToRequest from './AddQueriesToRequest'
import HttpMethodAndVersion from './HttpMethodAndVersion'
import PathTemplate from './PathTemplate'
import RateLimitOptions from './RateLimitOptions'
import HttpHandlerOptions from './HttpHandlerOptions'
import AuthenticationOptions from './AuthenticationOptions'
import FileCacheOptions from './FileCacheOptions'
import ServiceDetails from './ServiceDetails'
import RequestIdKey from './RequestIdKey'
import RouteOptions from './RouteOptions'
import SchemeType from './SchemeType'
import DownstreamHostAndPorts from './DownstreamHostAndPorts'
import QosOptions from './QosOptions'
import LoadBalancer from './LoadBalancer'
import Security from './Security'
import ConsulKey from './ConsulKey'
var consul = require('consul')();

class Config extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
          DownstreamPathTemplate: "/",
          UpstreamPathTemplate: "/",
          UpstreamHttpMethod: [],
          DownstreamHttpMethod: "get",
		  DownstreamHttpVersion: "2.0",
		  AddHeadersToRequest: {
		  Key: ["","","",""],
		  Value: ["","","",""]
		  },
          AddClaimsToRequest: {
		  Key: ["","","",""],
		  Value: ["","","",""]	  
		  },
          RouteClaimsRequirement: {
		  Key: ["","","",""],
		  Value: ["","","",""]	  
		  },
		  AddQueriesToRequest: {
		  Key: ["","","",""],
		  Value: ["","","",""]	  
		  },
          RequestIdKey: "",
          FileCacheOptions: {
              TtlSeconds: 0,
              Region: ""
          },
          RouteIsCaseSensitive: false,
          ServiceName: "",
          DownstreamScheme: "http",
          DownstreamHostAndPorts:
              {
                  Host: ["","","",""],
                  Port: ["","","",""]
              },
          QoSOptions: {
              ExceptionsAllowedBeforeBreaking: 0,
              DurationOfBreak: 0,
              TimeoutValue: 0
          },
          LoadBalancer: "No Load Balancer",
          RateLimitOptions: {
              ClientWhitelist: ["","","",""],
              EnableRateLimiting: false,
              Period: "",
              PeriodTimespan: 0,
              Limit: 0
          },
          AuthenticationOptions: {
              AuthenticationProviderKey: "",
              AllowedScopes: ["","","",""]
          },
          HttpHandlerOptions: {
              AllowAutoRedirect: false,
              UseCookieContainer: false,
              UseTracing: true,
              MaxConnectionsPerServer: 100
          },
		  DangerousAcceptAnyServerCertificateValidator: false,
      }
	}

	ConsulKey="";

	onInputChange_DownstreamPathTemplate = (event) => {
		this.setState({DownstreamPathTemplate: event.target.value})
	}

	onInputChange_UpstreamPathTemplate = (event) => {
		this.setState({UpstreamPathTemplate: event.target.value})
	}

	onInputChange_UpstreamHttpMethod_get = (event) => {
		let arr = this.state.UpstreamHttpMethod 
		if(event.target.checked){
		  arr.push('get')
		  this.setState({UpstreamHttpMethod: arr})
		}
		else{
		  arr.splice(arr.indexOf('get'), 1);
		  this.setState({UpstreamHttpMethod: arr})
		}
	}

	onInputChange_UpstreamHttpMethod_put = (event) => {
		let arr = this.state.UpstreamHttpMethod 
		if(event.target.checked){
		  arr.push('put')
		  this.setState({UpstreamHttpMethod: arr})
		}
		else{
		  arr.splice(arr.indexOf('put'), 1);
		  this.setState({UpstreamHttpMethod: arr})
		}
	}

	onInputChange_UpstreamHttpMethod_post = (event) => {
		let arr = this.state.UpstreamHttpMethod 
		if(event.target.checked){
		  arr.push('post')
		  this.setState({UpstreamHttpMethod: arr})
		}
		else{
		  arr.splice(arr.indexOf('post'), 1);
		  this.setState({UpstreamHttpMethod: arr})
		}
	}

	onInputChange_UpstreamHttpMethod_delete = (event) => {
		let arr = this.state.UpstreamHttpMethod 
		if(event.target.checked){
		  arr.push('delete')
		  this.setState({UpstreamHttpMethod: arr})
		}
		else{
		  arr.splice(arr.indexOf('delete'), 1);
		  this.setState({UpstreamHttpMethod: arr})
		}
	}

	onInputChange_DownstreamHttpMethod_get = () => {
		  this.setState({DownstreamHttpMethod: "get"})
	}

	onInputChange_DownstreamHttpMethod_put = () => {
		this.setState({DownstreamHttpMethod: "put"})
	}

	onInputChange_DownstreamHttpMethod_post = () => {
		this.setState({DownstreamHttpMethod: "post"})
	}

	onInputChange_DownstreamHttpMethod_delete = () => {
		this.setState({DownstreamHttpMethod: "delete"})
	}

	onInputChange_DownstreamHttpVersion_10 = (event) => {
		this.setState({DownstreamHttpVersion: "1.0"})
	}

	onInputChange_DownstreamHttpVersion_11 = (event) => {
		this.setState({DownstreamHttpVersion: "1.1"})
	}

	onInputChange_DownstreamHttpVersion_20 = (event) => {
		this.setState({DownstreamHttpVersion: "2.0"})
	}

	onInputChange_AddHeadersToRequestKey = (event,index) => {
		let arr = this.state.AddHeadersToRequest.Key;
		arr[index]=event.target.value;
		Object.assign(this.state.AddHeadersToRequest, {Key: arr})
	}

	onInputChange_AddHeadersToRequestValue = (event,index) => {
		let arr = this.state.AddHeadersToRequest.Value;
		arr[index]=event.target.value;
		Object.assign(this.state.AddHeadersToRequest, {Value: arr})
	}

	onInputChange_AddClaimsToRequestKey = (event, index) => {
		let arr = this.state.AddClaimsToRequest.Key;
		arr[index]=event.target.value;
		Object.assign(this.state.AddClaimsToRequest, {Key: arr})
	}

	onInputChange_AddClaimsToRequestValue = (event, index) => {
		let arr = this.state.AddClaimsToRequest.Value;
		arr[index]=event.target.value;
		Object.assign(this.state.AddClaimsToRequest, {Value: arr})
	}

	onInputChange_RouteClaimsRequirementKey = (event,index) => {
		let arr = this.state.RouteClaimsRequirement.Key;
		arr[index]=event.target.value;
		Object.assign(this.state.RouteClaimsRequirement, {Key: arr})
	}

	onInputChange_RouteClaimsRequirementValue = (event,index) => {
		let arr = this.state.RouteClaimsRequirement.Value;
		arr[index]=event.target.value;
		Object.assign(this.state.RouteClaimsRequirement, {Value: arr})
	}

	onInputChange_AddQueriesToRequestKey = (event,index) => {
		let arr = this.state.AddQueriesToRequest.Key;
		arr[index]=event.target.value;
		Object.assign(this.state.AddQueriesToRequest, {Key: arr})
	}

	onInputChange_AddQueriesToRequestValue = (event,index) => {
		let arr = this.state.AddQueriesToRequest.Value;
		arr[index]=event.target.value;
		Object.assign(this.state.AddQueriesToRequest, {Value: arr})
	}

	onInputChange_RequestIdKey = (event) => {
		this.setState({RequestIdKey: event.target.value})
	}

	onInputChange_TtlSeconds = (event) => {
		Object.assign(this.state.FileCacheOptions, {TtlSeconds: parseInt(event.target.value)})
	}

	onInputChange_Region = (event) => {
		Object.assign(this.state.FileCacheOptions, {Region: event.target.value})
	}

	onInputChange_rics = (event) => {
		if(event.target.checked)
		    this.setState({RouteIsCaseSensitive: true})
		else
		    this.setState({RouteIsCaseSensitive: false})
	}

	onInputChange_ServiceName = (event) => {
		this.setState({ServiceName: event.target.value})
	}

	onInputChange_DownstreamScheme_http = (event) => {
		this.setState({DownstreamScheme: 'http'})
	}

	onInputChange_DownstreamScheme_https = (event) => {
		this.setState({DownstreamScheme: 'https'})
	}

	onInputChange_Host = (event,index) => {
		let arr = this.state.DownstreamHostAndPorts.Host;
		arr[index]=event.target.value;
		Object.assign(this.state.DownstreamHostAndPorts, {Host: arr})
	}

	onInputChange_Port = (event,index) => {
		let arr = this.state.DownstreamHostAndPorts.Port;
		arr[index]=event.target.value;
		Object.assign(this.state.DownstreamHostAndPorts, {Port: arr})
	}

	onInputChange_ExceptionsAllowedBeforeBreaking = (event) => {
		Object.assign(this.state.QoSOptions, {ExceptionsAllowedBeforeBreaking: parseInt(event.target.value)})
	}

	onInputChange_DurationOfBreak = (event) => {
		Object.assign(this.state.QoSOptions, {DurationOfBreak: parseInt(event.target.value)})
	}

	onInputChange_TimeoutValue = (event) => {
		Object.assign(this.state.QoSOptions, {TimeoutValue: parseInt(event.target.value)})
	}

	onInputChange_LoadBalancer_LeastConnection = () => {
		this.setState({LoadBalancer: 'LeastConnection'})
	}

	onInputChange_LoadBalancer_RoundRobin = () => {
		this.setState({LoadBalancer: 'RoundRobin'})
	}

	onInputChange_LoadBalancer_NoLoadBalancer = () => {
		this.setState({LoadBalancer: 'NoLoadBalancer'})
	}

	onInputChange_LoadBalancer_CookieStickySessions = () => {
		this.setState({LoadBalancer: 'CookieStickySessions'})
	}

	onInputChange_daascv = (event) => {
		if(event.target.checked)
		    this.setState({DangerousAcceptAnyServerCertificateValidator: true})
		else
		    this.setState({DangerousAcceptAnyServerCertificateValidator: false})
	}

	onInputChange_ClientWhitelist = (event,index) => {
		let arr = this.state.RateLimitOptions.ClientWhitelist;
		arr[index]=event.target.value;
		Object.assign(this.state.RateLimitOptions, {ClientWhitelist: arr})
	}

	onInputChange_erl = (event) => {
		if(event.target.checked)
		    Object.assign(this.state.RateLimitOptions, {EnableRateLimiting: true})
		else
		    Object.assign(this.state.RateLimitOptions, {EnableRateLimiting: false})
	}

	onInputChange_Period = (event) => {
		Object.assign(this.state.RateLimitOptions, {Period: event.target.value})
	}


	onInputChange_PeriodTimespan = (event) => {
		Object.assign(this.state.RateLimitOptions, {PeriodTimespan: parseInt(event.target.value)})
	}


	onInputChange_Limit = (event) => {
		Object.assign(this.state.RateLimitOptions, {Limit: parseInt(event.target.value)})
	}

	onInputChange_AuthenticationProviderKey = (event) => {
		Object.assign(this.state.AuthenticationOptions, {AuthenticationProviderKey: event.target.value})
	}

	onInputChange_AllowedScopes = (event,index) => {
		let arr = this.state.AuthenticationOptions.AllowedScopes;
		arr[index]=event.target.value;
		Object.assign(this.state.AuthenticationOptions, {AllowedScopes: arr})
	}

	onInputChange_aar = (event) => {
		if(event.target.checked)
		    Object.assign(this.state.HttpHandlerOptions, {AllowAutoRedirect: true})
		else
		    Object.assign(this.state.HttpHandlerOptions, {AllowAutoRedirect: false})
	}

	onInputChange_ucc = (event) => {
		if(event.target.checked)
			Object.assign(this.state.HttpHandlerOptions, {UseCookieContainer: true})
		else
		    Object.assign(this.state.HttpHandlerOptions, {UseCookieContainer: false})
	}

	onInputChange_ut = (event) => {
		if(event.target.checked)
		    Object.assign(this.state.HttpHandlerOptions, {UseTracing: true})
		else
		    Object.assign(this.state.HttpHandlerOptions, {UseTracing: false})
	}

	onInputChange_MaxConnectionsPerServer = (event) => {
		Object.assign(this.state.HttpHandlerOptions, {MaxConnectionsPerServer: parseInt(event.target.value)})
	}

	onInputChange_ConsulKey = (event) => {
		this.ConsulKey=event.target.value;
	}

	onSubmitSignIn = () => {
		console.log(this.ConsulKey)
		let ConsulObj={}
		Object.assign(ConsulObj, this.state)

		let key0,value0,key1,value1,key2,value2,key3,value3;
		key0=ConsulObj.AddHeadersToRequest.Key[0];
		value0=ConsulObj.AddHeadersToRequest.Value[0];
		key1=ConsulObj.AddHeadersToRequest.Key[1];
		value1=ConsulObj.AddHeadersToRequest.Value[1];
		key2=ConsulObj.AddHeadersToRequest.Key[2];
		value2=ConsulObj.AddHeadersToRequest.Value[2];
		key3=ConsulObj.AddHeadersToRequest.Key[3];
		value3=ConsulObj.AddHeadersToRequest.Value[3];

		ConsulObj.AddHeadersToRequest = {
				[key0]: value0,
				[key1]: value1,
				[key2]: value2,
				[key3]: value3
		}

		key0=ConsulObj.AddClaimsToRequest.Key[0];
		value0=ConsulObj.AddClaimsToRequest.Value[0];
		key1=ConsulObj.AddClaimsToRequest.Key[1];
		value1=ConsulObj.AddClaimsToRequest.Value[1];
		key2=ConsulObj.AddClaimsToRequest.Key[2];
		value2=ConsulObj.AddClaimsToRequest.Value[2];
		key3=ConsulObj.AddClaimsToRequest.Key[3];
		value3=ConsulObj.AddClaimsToRequest.Value[3];

		ConsulObj.AddClaimsToRequest = {
				[key0]: value0,
				[key1]: value1,
				[key2]: value2,
				[key3]: value3
		}

		key0=ConsulObj.RouteClaimsRequirement.Key[0];
		value0=ConsulObj.RouteClaimsRequirement.Value[0];
		key1=ConsulObj.RouteClaimsRequirement.Key[1];
		value1=ConsulObj.RouteClaimsRequirement.Value[1];
		key2=ConsulObj.RouteClaimsRequirement.Key[2];
		value2=ConsulObj.RouteClaimsRequirement.Value[2];
		key3=ConsulObj.RouteClaimsRequirement.Key[3];
		value3=ConsulObj.RouteClaimsRequirement.Value[3];

		ConsulObj.RouteClaimsRequirement = {
				[key0]: value0,
				[key1]: value1,
				[key2]: value2,
				[key3]: value3
		}

		key0=ConsulObj.AddQueriesToRequest.Key[0];
		value0=ConsulObj.AddQueriesToRequest.Value[0];
		key1=ConsulObj.AddQueriesToRequest.Key[1];
		value1=ConsulObj.AddQueriesToRequest.Value[1];
		key2=ConsulObj.AddQueriesToRequest.Key[2];
		value2=ConsulObj.AddQueriesToRequest.Value[2];
		key3=ConsulObj.AddQueriesToRequest.Key[3];
		value3=ConsulObj.AddQueriesToRequest.Value[3];

		ConsulObj.AddQueriesToRequest = {
				[key0]: value0,
				[key1]: value1,
				[key2]: value2,
				[key3]: value3
		}

		let obj0={},obj1={},obj2={},obj3={};
        key0=ConsulObj.DownstreamHostAndPorts.Host[0];
		value0=ConsulObj.DownstreamHostAndPorts.Port[0];
		Object.assign(obj0,{"Host": key0, "Port": value0})
		key1=ConsulObj.DownstreamHostAndPorts.Host[1];
		value1=ConsulObj.DownstreamHostAndPorts.Port[1];
		Object.assign(obj1,{"Host": key1, "Port": value1})
		key2=ConsulObj.DownstreamHostAndPorts.Host[2];
		value2=ConsulObj.DownstreamHostAndPorts.Port[2];
		Object.assign(obj2,{"Host": key2, "Port": value2})
		key3=ConsulObj.DownstreamHostAndPorts.Host[3];
		value3=ConsulObj.DownstreamHostAndPorts.Port[3];
		Object.assign(obj3,{"Host": key3, "Port": value3})
		ConsulObj.DownstreamHostAndPorts=[obj0,obj1,obj2,obj3]

		console.log(ConsulObj)

		let ConsulArr=[]
		consul.kv.get(this.ConsulKey, function(err, result) {
			if (result === undefined) 
				console.log('key not found');
			else{
			ConsulArr = JSON.parse(result.Value)
			console.log('key:',result.Key)
			}
		})

		console.log(ConsulArr)

		ConsulArr.push(ConsulObj)
		let ConsulJson = JSON.stringify(ConsulArr);
		consul.kv.set(this.ConsulKey, ConsulJson, function(err, result) {
	      if (result === false) 
	    	  console.log('Error');
	      else{
	        console.log(result)
	      }
      })
	}

	render(){
		return(

			<div className="container">

				<div className="wrapper">

					
					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

					<ConsulKey
					onInputChange_ConsulKey={this.onInputChange_ConsulKey}
					/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<PathTemplate 
						onInputChange_DownstreamPathTemplate={this.onInputChange_DownstreamPathTemplate}
						onInputChange_UpstreamPathTemplate={this.onInputChange_UpstreamPathTemplate}
						/>
					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<HttpMethodAndVersion 
						onInputChange_UpstreamHttpMethod_get={this.onInputChange_UpstreamHttpMethod_get}
						onInputChange_UpstreamHttpMethod_put={this.onInputChange_UpstreamHttpMethod_put}
						onInputChange_UpstreamHttpMethod_post={this.onInputChange_UpstreamHttpMethod_post}
						onInputChange_UpstreamHttpMethod_delete={this.onInputChange_UpstreamHttpMethod_delete}
						onInputChange_DownstreamHttpMethod_get={this.onInputChange_DownstreamHttpMethod_get}
						onInputChange_DownstreamHttpMethod_put={this.onInputChange_DownstreamHttpMethod_put}
						onInputChange_DownstreamHttpMethod_post={this.onInputChange_DownstreamHttpMethod_post}
						onInputChange_DownstreamHttpMethod_delete={this.onInputChange_DownstreamHttpMethod_delete}
						onInputChange_DownstreamHttpVersion_10={this.onInputChange_DownstreamHttpVersion_10}
						onInputChange_DownstreamHttpVersion_11={this.onInputChange_DownstreamHttpVersion_11}
						onInputChange_DownstreamHttpVersion_20={this.onInputChange_DownstreamHttpVersion_20}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<AddHeadersToRequest 
						onInputChange_AddHeadersToRequestKey={this.onInputChange_AddHeadersToRequestKey}
						onInputChange_AddHeadersToRequestValue={this.onInputChange_AddHeadersToRequestValue}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<AddClaimsToRequest 
						onInputChange_AddClaimsToRequestKey={this.onInputChange_AddClaimsToRequestKey}
						onInputChange_AddClaimsToRequestValue={this.onInputChange_AddClaimsToRequestValue}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<RouteClaimsRequirement 
						onInputChange_RouteClaimsRequirementKey={this.onInputChange_RouteClaimsRequirementKey}
						onInputChange_RouteClaimsRequirementValue={this.onInputChange_RouteClaimsRequirementValue}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">
					
						<AddQueriesToRequest 
						onInputChange_AddQueriesToRequestKey={this.onInputChange_AddQueriesToRequestKey}
						onInputChange_AddQueriesToRequestValue={this.onInputChange_AddQueriesToRequestValue}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<RequestIdKey 
						onInputChange_RequestIdKey={this.onInputChange_RequestIdKey}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<FileCacheOptions
						onInputChange_TtlSeconds={this.onInputChange_TtlSeconds}
						onInputChange_Region={this.onInputChange_Region}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<RouteOptions
						onInputChange_rics={this.onInputChange_rics}
						/>

					</div>

				</div>

			    <div className="wrapper">

				    <div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

					<ServiceDetails
					onInputChange_ServiceName={this.onInputChange_ServiceName}
					/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

					<SchemeType
					onInputChange_DownstreamScheme_http={this.onInputChange_DownstreamScheme_http}
					onInputChange_DownstreamScheme_https={this.onInputChange_DownstreamScheme_https}
					/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<DownstreamHostAndPorts
						onInputChange_Host={this.onInputChange_Host}
						onInputChange_Port={this.onInputChange_Port}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<QosOptions
						onInputChange_ExceptionsAllowedBeforeBreaking={this.onInputChange_ExceptionsAllowedBeforeBreaking}
						onInputChange_DurationOfBreak={this.onInputChange_DurationOfBreak}
						onInputChange_TimeoutValue={this.onInputChange_TimeoutValue}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<LoadBalancer
						onInputChange_LoadBalancer_LeastConnection={this.onInputChange_LoadBalancer_LeastConnection}
						onInputChange_LoadBalancer_RoundRobin={this.onInputChange_LoadBalancer_RoundRobin}
						onInputChange_LoadBalancer_NoLoadBalancer={this.onInputChange_LoadBalancer_NoLoadBalancer}
						onInputChange_LoadBalancer_CookieStickySessions={this.onInputChange_LoadBalancer_CookieStickySessions}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<Security
						onInputChange_daascv={this.onInputChange_daascv}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<RateLimitOptions 
						onInputChange_ClientWhitelist={this.onInputChange_ClientWhitelist}
						onInputChange_erl={this.onInputChange_erl}
						onInputChange_Period={this.onInputChange_Period}
						onInputChange_PeriodTimespan={this.onInputChange_PeriodTimespan}
						onInputChange_Limit={this.onInputChange_Limit}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<AuthenticationOptions 
						onInputChange_AuthenticationProviderKey={this.onInputChange_AuthenticationProviderKey}
						onInputChange_AllowedScopes={this.onInputChange_AllowedScopes}
						/>

					</div>

					<div className="box ml4 ba b--black-025 shadow-5 br3 pa4">

						<HttpHandlerOptions 
						onInputChange_aar={this.onInputChange_aar}
						onInputChange_ucc={this.onInputChange_ucc}
						onInputChange_ut={this.onInputChange_ut}
						onInputChange_MaxConnectionsPerServer={this.onInputChange_MaxConnectionsPerServer}
						/>

					</div>

			    </div>

				<input onClick={this.onSubmitSignIn} type="submit" value="SUBMIT"
				className="submit input-reset fw6 lh-copy f6 mb4 center pointer ba b--black-025 w-90"/>

	        </div>
		)
    }
}

export default Config