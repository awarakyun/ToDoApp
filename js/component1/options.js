import React from 'react';

const Options = (props) => {
    return(
        props.list.length>0?(<div ><ol>{props.list.map( (x,key) => {return <div className="option">
        <li key={key} className="option__text">{x}
        </li><button onClick = { (e) => props.handleDeleteOption(x)}
               className="button button--link" >Remove</button></div>})}</ol></div>):(<p>Enter elements to continue</p>)
        );
    
}
export default Options;