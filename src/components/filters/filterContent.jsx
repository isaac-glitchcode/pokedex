import React from 'react';
import Type from './type/type';
import Name from './name/name';
import './css/filterContent.css';

export default function FilterContent(props){
    return(
        <div className="content-filter">
            <Type handleTypeSelect={props.handleTypeSelect} types={props.types}/>
            <Name handleText={props.handleText}/>
        </div>
    );
}