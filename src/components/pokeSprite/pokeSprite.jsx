import React, {useEffect} from 'react';
import './css/pokeSprite.css';

export default function Sprite(props){
   
    useEffect(()=>{
        return()=>{

        }
    },[])
   
    return (
        <div className="sprite">
            
            <img 
                src={props.pokemon.sprite} 
                alt={props.pokemon.name} 
                onClick={()=>{
                    props.handle(props.pokemon)
                }}
            />

        </div>
    )
}