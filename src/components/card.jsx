import React, {useEffect} from 'react';

export default function Card(props){
   
    useEffect(()=>{
        return()=>{

        }
    },[])
   
    return (
        <div className="card">
            
            <img src={props.pokemon.sprite} alt={props.pokemon.name.english} onClick={()=>{
                
                props.handle(props.pokemon)
            }}/>
           
            
            
        </div>
    )
}