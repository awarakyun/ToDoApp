import React from 'react';

const AddOption = (props) => (
    <div >
        <form onSubmit={props.handleAddOption}>
            <input type={'text'} name={'option'} />
            <button className={"button"}>Add Option</button>
        </form>
    </div>)


export default AddOption;