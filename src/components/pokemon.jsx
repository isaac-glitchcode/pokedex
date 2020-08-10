import React, {useState, useEffect} from 'react';
import {Radar} from 'react-chartjs-2';

export default function Pokemon(props){
    const [chartData, setChartData] = useState({});

    const chart = () =>{
        setChartData({
            labels:['HP','ATTACK', 'DEFENSE', 'SPEED', 'SP.ATTACK', 'SP.DEFENSE'],
            datasets:[
                {
                    
                    data:[
                        props.pokemon.base.HP, 
                        props.pokemon.base.Attack, 
                        props.pokemon.base.Defense, 
                        props.pokemon.base.Speed,
                        props.pokemon.base.Sp_Attack,
                        props.pokemon.base.Sp_Defense
                    ],
                    backgroundColor:['rgba(22, 149, 152, 0.8)']

                }
            ]
        })
    }

    useEffect(()=>{
        chart();
        let crie = new Audio(props.pokemon.crie);
        crie.play();
    },[])
    
    return (
        <div className="pokemon">
           
            {/* <img src="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/poison.svg" alt=""/> */}
                
                
            <div className="base">
                <div>
                    <h2>No.{props.pokemon.id}</h2>
                </div>
                <div>
                    <h2>{props.pokemon.name.english}</h2>
                </div>
                <div className="type">
                    {props.pokemon.type.map((type, index)=>{
                        return <span key={index} className={`types ${type}`}>{type}</span>
                    })}
                </div>
                
            </div>
            
            <img src={props.pokemon.animation} alt={props.pokemon.name.english}/>
            <div className="radar">
                <Radar data={chartData} options={
                    {
                        responsive:true,
                        legend: false,
                        
                        pointLabels :{
                            fontSize: 12,
                            },
                        scale: {
                            angleLines: {
                            color: "white" // lines radiating from the center
                            },
                            gridLines: {
                                color: "rgba(69, 193, 241, 0.815)"
                            },
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 100,
                                stepSize: 20,
                                display:false
                              },
                              pointLabels :{
                                fontSize: 12,
                                fontColor: 'white',
                                defaultFontFamily:'Helvetica'
                            }
                        }
                    }
                }/>
            </div>
            
            
        </div>
    )
}