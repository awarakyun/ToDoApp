import React, { Component } from 'react';
import StatusStore from './js/store1/statusStore';
import ToDoApp from './js/component1/to-do-app.js';


export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        storeProps:new StatusStore().state
      };
    }
    
    componentDidMount(){
      this.unsubscribe = new StatusStore().listen(this.onStoreUpdate, this);
  
    }
  
    onStoreUpdate(storeProps){  
      this.setState({storeProps});
    }
  
  
  
    render() {
        const {state:{storeProps}} = this;
      return (<div>
          <ToDoApp status={this.state.storeProps} />
          </div>);
    }
  }