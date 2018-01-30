import React, { Component } from 'react';
import StatusStore from './js/store/statusStore';
import ToDoApp from './js/component/toDoApp.js';


export default class App extends Component {
    constructor(props){
      super(props);
      this.store = new StatusStore();
      this.state = {
        storeProps:this.store.state
      };
    }
    
    componentDidMount(){
      this.unsubscribe = this.store.listen(this.onStoreUpdate, this);
  
    }
  
    onStoreUpdate(storeProps){  
      //console.log('test update state', storeProps);
      this.setState({storeProps});
    }
  
  
  
    render() {
        const {state:{storeProps}} = this;
      return (<div>
          <ToDoApp status={this.state.storeProps} />
          </div>);
    }
  }