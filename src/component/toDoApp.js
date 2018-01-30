import React from 'react';
import actions from '../action/actions';
import Header from './header';
import Options from './options';
import AddOption from './addOption';

export default class ToDoApp extends React.Component {


    // handleAddOption = (e) => {
    //     e.preventDefault();
    //     let { target: { elements: { option: { value } } } } = e;
    //     let val = value.trim();
    //     if (val) {
    //         actions.AddOption(val);
    //     }
    //     if (val == '') {
    //         actions.ErrorCheck();
    //     }

    //     return false;
    // }

    render() {
        console.log(this.props.status.selected);
        return (<div>
            <Header />
            <div className='container'>
                <Options list={this.props.status.options} handleDeleteOption={actions.DeleteOption} />
                {this.props.status.errorMsg && <p className='errorMsg'>{this.props.status.errorMsg}</p>}
                <AddOption />
            </div>
        </div>);
    }

}