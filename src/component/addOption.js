import React from 'react';
import actions from '../action/actions';

class AddOption extends React.Component{

    handleAddOption = (e) => {
        // let { target: { elements: { option: { value } } } } = e;
        // let val = value.trim();
        let {refs:{textInput:{value:val}}} =  this;
        this.refs.textInput.value = '';
        val= val.trim();
        if (val) {
            actions.AddOption(val);
        }
        if (val == '') {
            actions.ErrorCheck();
        }

    }
    
    render(){
        return(<div > 
                <input type={'text'} ref={'textInput'} name={'option'} />
                <button className={"button"} onClick={this.handleAddOption}>Add Option</button>
        </div>)
    }
};


export default AddOption;