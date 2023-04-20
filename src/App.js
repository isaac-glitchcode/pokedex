import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Sprite from './components/pokeSprite/pokeSprite';
import Pokemon from './components/pokemon/pokemon';
import './App.css';
import FilterContent from './components/filters/filterContent';
import axios from 'axios';

function App() {

  useEffect(() => {
    let myPokeAPI = "http://127.0.0.1:5000/mypokeapi/api/v1/pokemons";
    axios.get(myPokeAPI)
      .then(res => setPokemons(res.data))
  }, []);

 
  const [types] = useState(["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal", "Electric", "Ground", "Fairy", "Psychic", "Ghost","Ice", "Fight", "Dragon", "Steel", "Rock"]);
 
  const [pokemons, setPokemons] = useState([]);
  const [typeSelected, setTypeSelected] = useState("All");

  const [pokeSelected, setPokeSelected] = useState(" ");
  const [id, setId] = useState(1);

  useEffect(()=>{
    const url = `http://127.0.0.1:5000//mypokeapi/api/v1/pokemons/${id}`;

    axios.get(url)
      .then(res => setPokeSelected(res.data))
  },[id])

  const [namePoke, setNamePoke] = useState("");

  const handleTypeSelect = (event) =>{
    setTypeSelected(event.target.value);
  }
  const selectPokemon = (p) => {
    
    setId(p.id);
  }
  const handleText = (event) => {
    let name = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase();
    setNamePoke(name);
  }

  
     return (
      
      <div className="App">
        <span></span>
        <span></span>
        <span></span>

      <div className="filters">
        <FilterContent handleTypeSelect={handleTypeSelect} handleText={handleText} types={types}/>
      </div>
      <div className="main">
        
        <div className="list">
          
            <Router>
              <Switch>
                <Route exact path="/">
                  {
                    pokemons.filter(pokemon =>{
                      return typeSelected==="All"? true : 

                      pokemon.type.includes(typeSelected)}).filter(pokemon=>{
                        
                        return pokemon.name.includes(namePoke)
                      }).map((pokemon, index)=> {
                      return (
                      <Link to="/pokemon" key={index}><Sprite pokemon = {pokemon}  handle={selectPokemon}/></Link>
                      )
                    }) 
                  }
                </Route>
                <Route path="/pokemon">
                  <Pokemon pokemon={pokeSelected} />
                </Route> 
              </Switch>
            </Router>
          </div>
       </div>      
      </div>
     );
  
}

export default App;
