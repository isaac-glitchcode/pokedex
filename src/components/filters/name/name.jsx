import React from 'react';
import './css/name.css';

export default function Type(props){
    return(
        <div className="name">
            <form>
                <input type="text" onChange={props.handleText} />
            </form>
        </div>
    );
}