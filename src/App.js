import './App.css'
/*import Consul from './Components/SimpleUI/Consul'*/
import Config from './Components/ExpansiveUI/Config'
import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <h3 className='fw6 mb4'>Configuration Designer</h3>
        <Config/>
       {/* <Consul/> */}
      </div>
    );
  }
}

export default App;