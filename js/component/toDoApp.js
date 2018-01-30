import React from 'react';
import actions from '../action/actions';
import Header from './header';
import Options from './options';
import AddOption from './addOption';

export default class ToDoApp extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        // const input = event.target.elements.option.value.trim();
        // if (input === null) {
        //     actions.handleErrorCheck();
        // }
        // else {
        //     actions.handleAddOption(input);
        // }
        // return false;
        let { target:{ elements:{ option:{ value } } } } = e;
        actions.isValid();
        if(value){
            actions.isValid(value.trim())
            return;
        }
        if(value.trim()==null)
          actions.ErrorCheck();
    }

    render() {
        return (<div>
            <Header />
            <div className='container'>
                <Options list={this.props.status.options} handleDeleteOption={actions.DeleteOption} />
                {this.props.status.errorMsg && <p className='errorMsg'>{this.props.status.errorMsg}</p>}
                 <AddOption handleAddOption={this.handleAddOption} />
            </div>
        </div>);
    }

}