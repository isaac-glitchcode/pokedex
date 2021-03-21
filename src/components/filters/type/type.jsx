import React,{useState} from 'react';
import './css/type.css';

export default function Type(props){
    const [effect, setEffect] = useState(false);
    
    const fn = () =>{
        setEffect(!effect);
    }
   
    return(
        <div className="type">
            <select onChange={props.handleTypeSelect} onClick={fn}>
                <option className="opt" key={0}  defaultValue="All">All</option>
                {
                props.types.map((type, index)=>{
                    return(
                    <option className="opt" key={index +1} value={type}>{type}</option>
                    )
                })
                }
            </select>

            {
            effect===false?
                <i onClick={fn} className="normal"></i>
            :
                <i onClick={fn} className="selected"></i>
            } 
       
        </div>
    );
}