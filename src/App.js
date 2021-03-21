import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Sprite from './components/pokeSprite/pokeSprite';
import Pokemon from './components/pokemon/pokemon';
import './App.css';
import FilterContent from './components/filters/filterContent';

function App(){
  
  const [types] = useState(["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal", "Electric", "Ground", "Fairy", "Psychic", "Ghost","Ice", "Fight", "Dragon", "Steel", "Rock"]);
  const [pokemons] = useState([
  {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/001%20-%20Bulbasaur.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_001_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Bulbasaur.gif",
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp_Attack": 65,
      "Sp_Defense": 65,
      "Speed": 45
      }
  },

  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草",
      "french": "Herbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/002%20-%20Ivysaur.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_002_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Ivysaur.gif",
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp_Attack": 80,
      "Sp_Defense": 80,
      "Speed": 60
    }
  },

  {
    "id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花",
      "french": "Florizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/003%20-%20Venusaur.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_003_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Venusaur.gif",
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp_Attack": 100,
      "Sp_Defense": 100,
      "Speed": 80
    }
  },
  
  {
    "id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙",
      "french": "Salamèche"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/004%20-%20Charmander.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_004_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Charmander.gif",
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp_Attack": 60,
      "Sp_Defense": 50,
      "Speed": 65
    }
  },

  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙",
      "french": "Reptincel"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/005%20-%20Charmeleon.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_005_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Charmeleon.gif",    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp_Attack": 80,
      "Sp_Defense": 65,
      "Speed": 80
    }
  },

  {
    "id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙",
      "french": "Dracaufeu"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/006%20-%20Charizard.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_006_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Charizard.gif",    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp_Attack": 109,
      "Sp_Defense": 85,
      "Speed": 100
    }
  },

  {
    "id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟",
      "french": "Carapuce"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/007%20-%20Squirtle.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_007_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Squirtle.gif",    
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp_Attack": 50,
      "Sp_Defense": 64,
      "Speed": 43
    }
  },

  {
    "id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟",
      "french": "Carabaffe"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/008%20-%20Wartortle.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_008_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Wartortle.gif",    
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp_Attack": 65,
      "Sp_Defense": 80,
      "Speed": 58
    }
  },

  {
    "id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟",
      "french": "Tortank"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/009%20-%20Blastoise.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_009_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Blastoise.gif",   
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp_Attack": 85,
      "Sp_Defense": 105,
      "Speed": 78
    }
  },

  {
    "id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫",
      "french": "Chenipan"
    },
    "type": [
      "Bug"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/010%20-%20Caterpie.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_010_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Caterpie.gif",
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp_Attack": 20,
      "Sp_Defense": 20,
      "Speed": 45
    }
  },

  {
    "id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹",
      "french": "Chrysacier"
    },
    "type": [
      "Bug"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/011%20-%20Metapod.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_011_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Metapod.gif",
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp_Attack": 25,
      "Sp_Defense": 25,
      "Speed": 30
    }
  },

  {
    "id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶",
      "french": "Papilusion"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/012%20-%20Butterfree.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_012_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Butterfree.gif",
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp_Attack": 90,
      "Sp_Defense": 80,
      "Speed": 70
    }
  },

  {
    "id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫",
      "french": "Aspicot"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/013%20-%20Weedle.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_013_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Weedle.gif",
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp_Attack": 20,
      "Sp_Defense": 20,
      "Speed": 50
    }
  },

  {
    "id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹",
      "french": "Coconfort"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/014%20-%20Kakuna.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_014_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Kakuna.gif",
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp_Attack": 25,
      "Sp_Defense": 25,
      "Speed": 35
    }
  },

  {
    "id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂",
      "french": "Dardargnan"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/015%20-%20Beedrill.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_015_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Beedrill.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp_Attack": 45,
      "Sp_Defense": 80,
      "Speed": 75
    }
  },

  {
    "id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波",
      "french": "Roucool"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/016%20-%20Pidgey.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_016_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Pidgey.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp_Attack": 35,
      "Sp_Defense": 35,
      "Speed": 56
    }
  },

  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟",
      "french": "Roucoups"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/017%20-%20Pidgeotto.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_017_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Pidgeotto.gif",
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 71
    }
  },

  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟",
      "french": "Roucarnage"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/018%20-%20Pidgeot.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_018_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Pidgeot.gif",
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp_Attack": 70,
      "Sp_Defense": 70,
      "Speed": 101
    }
  },

  {
    "id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达",
      "french": "Rattata"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/019%20-%20Rattata.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_019_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Rattata.gif",
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp_Attack": 25,
      "Sp_Defense": 35,
      "Speed": 72
    }
  },

  {
    "id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达",
      "french": "Rattatac"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/020%20-%20Raticate.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_020_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Raticate.gif",
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp_Attack": 50,
      "Sp_Defense": 70,
      "Speed": 97
    }
  },

  {
    "id": 21,
    "name": {
      "english": "Spearow"
      
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/021%20-%20Spearow.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_021_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Spearow.gif",
    "base": {
      "HP": 40,
      "Attack": 60,
      "Defense": 30,
      "Sp_Attack": 31,
      "Sp_Defense": 31,
      "Speed": 70
    }
  },

  {
    "id": 22,
    "name": {
      "english": "Fearow"
      
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/022%20-%20Fearow.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_022_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Fearow.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 65,
      "Sp_Attack": 61,
      "Sp_Defense": 61,
      "Speed": 100
    }
  },
  {
    "id": 23,
    "name": {
      "english": "Ekans"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/020%23-%20Ekans.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_023_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Ekans.gif",
    "base": {
      "HP": 35,
      "Attack": 60,
      "Defense": 44,
      "Sp_Attack": 40,
      "Sp_Defense": 54,
      "Speed": 55
    }
  },

  {
    "id": 24,
    "name": {
      "english": "Arbok"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/024%20-%20Arbok.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_024_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Arbok.gif",
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 69,
      "Sp_Attack": 65,
      "Sp_Defense": 79,
      "Speed": 80
    }
  },

  {
    "id": 25,
    "name": {
      "english": "Pikachu"
    },
    "type": [
      "Electric"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/025%20-%20Pikachu.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_025_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Pikachu.gif",
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 40,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 90
    }
  },

  {
    "id": 26,
    "name": {
      "english": "Raichu"
    },
    "type": [
      "Electric"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/026%20-%20Raichu.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_026_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Raichu.gif",
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 55,
      "Sp_Attack": 90,
      "Sp_Defense": 80,
      "Speed": 110
    }
  },

  {
    "id": 27,
    "name": {
      "english": "Sandshrew"
    },
    "type": [
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/027%20-%20Sandshrew.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_027_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Sandshrew.gif",
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 85,
      "Sp_Attack": 20,
      "Sp_Defense": 30,
      "Speed": 40
    }
  },

  {
    "id": 28,
    "name": {
      "english": "Sandslash"
    },
    "type": [
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/028%20-%20Sandslash.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_028_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Sandslash.gif",
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 110,
      "Sp_Attack": 45,
      "Sp_Defense": 55,
      "Speed": 65
    }
  },

  {
    "id": 29,
    "name": {
      "english": "Nidoran♀"
    },
    "type": [
      "Poison"
    ],
    // "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/nidoran_m.gif",
    // "sprite": "https://vignette.wikia.nocookie.net/es.pokemon/images/8/83/Nidoran_hembra_XY.gif/revision/latest?cb=20140214044458",
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/029%20-%20Nidoran%20(Female).wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_029_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Nidoran_Female.gif",
    "base": {
      "HP": 55,
      "Attack": 47,
      "Defense": 52,
      "Sp_Attack": 40,
      "Sp_Defense": 40,
      "Speed": 41
    }
  },

  {
    "id": 30,
    "name": {
      "english": "Nidorina"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/030%20-%20Nidorina.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_030_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Nidorina.gif",
    "base": {
      "HP": 70,
      "Attack": 62,
      "Defense": 67,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 56
    }
  },

  {
    "id": 31,
    "name": {
      "english": "Nidoqueen"
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/031%20-%20Nidoqueen.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_031_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Nidoqueen.gif",
    "base": {
      "HP": 90,
      "Attack": 92,
      "Defense": 87,
      "Sp_Attack": 75,
      "Sp_Defense": 85,
      "Speed": 76
    }
  },

  {
    "id": 32,
    "name": {
      "english": "Nidoran♂"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/032%20-%20Nidoran%20(Male).wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_032_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Nidoran_Male.gif",
    "base": {
      "HP": 46,
      "Attack": 57,
      "Defense": 40,
      "Sp_Attack": 40,
      "Sp_Defense": 40,
      "Speed": 50
    }
  },

  {
    "id": 33,
    "name": {
      "english": "Nidorino"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/033%20-%20Nidorino.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_033_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Nidorino.gif",
    "base": {
      "HP": 61,
      "Attack": 72,
      "Defense": 57,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 65
    }
  },

  {
    "id": 34,
    "name": {
      "english": "Nidoking"
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/034%20-%20Nidoking.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_034_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Nidoking.gif",
    "base": {
      "HP": 61,
      "Attack": 72,
      "Defense": 57,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 65
    }
  },

  {
    "id": 35,
    "name": {
      "english": "Clefairy"
    },
    "type": [
      "Fairy"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/035%20-%20Clefairy.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_035_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Clefairy.gif",
    "base": {
      "HP": 70,
      "Attack": 45,
      "Defense": 48,
      "Sp_Attack": 60,
      "Sp_Defense": 65,
      "Speed": 35
    }
  },
  {
    "id": 36,
    "name": {
      "english": "Clefable"
    },
    "type": [
      "Fairy"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/036%20-%20Clefable.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_036_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Clefable.gif",
    "base": {
      "HP": 95,
      "Attack": 70,
      "Defense": 73,
      "Sp_Attack": 95,
      "Sp_Defense": 90,
      "Speed": 60
    }
  },

  {
    "id": 37,
    "name": {
      "english": "Vulpix"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/037%20-%20Vulpix.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_037_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Vulpix.gif",
    "base": {
      "HP": 38,
      "Attack": 41,
      "Defense": 40,
      "Sp_Attack": 50,
      "Sp_Defense": 65,
      "Speed": 65
    }
  },

  {
    "id": 38,
    "name": {
      "english": "Ninetales"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/038%20-%20Ninetales.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_038_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Ninetales.gif",
    "base": {
      "HP": 73,
      "Attack": 76,
      "Defense": 75,
      "Sp_Attack": 81,
      "Sp_Defense": 100,
      "Speed": 100
    }
  },

  {
    "id": 39,
    "name": {
      "english": "Jigglypuff"
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/039%20-%20Jigglypuff.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_039_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Jigglypuff.gif",
    "base": {
      "HP": 115,
      "Attack": 45,
      "Defense": 20,
      "Sp_Attack": 45,
      "Sp_Defense": 25,
      "Speed": 20
    }
  },

  {
    "id": 40,
    "name": {
      "english": "Wigglytuff"
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/040%20-%20Wigglytuff.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_040_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Wigglytuff.gif",
    "base": {
      "HP": 140,
      "Attack": 70,
      "Defense": 45,
      "Sp_Attack": 85,
      "Sp_Defense": 50,
      "Speed": 45
    }
  },
  {
    "id": 41,
    "name": {
      "english": "Zubat"
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/041%20-%20Zubat.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_041_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Zubat.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp_Attack": 30,
      "Sp_Defense": 40,
      "Speed": 55
    }
  },
  {
    "id": 42,
    "name": {
      "english": "Golbat"
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/042%20-%20Golbat.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_042_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Golbat.gif",
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 70,
      "Sp_Attack": 65,
      "Sp_Defense": 75,
      "Speed": 90
    }
  },

  {
    "id": 43,
    "name": {
      "english": "Oddish"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/043%20-%20Oddish.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_043_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Oddish.gif",
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 55,
      "Sp_Attack": 75,
      "Sp_Defense": 65,
      "Speed": 30
    }
  },
  {
    "id": 44,
    "name": {
      "english": "Gloom"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/044%20-%20Gloom.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_044_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Gloom.gif",
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 70,
      "Sp_Attack": 85,
      "Sp_Defense": 75,
      "Speed": 40
    }
  },

{
    "id": 45,
    "name": {
      "english": "Vileplume"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/045%20-%20Vileplume.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_045_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Vileplume.gif",
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 85,
      "Sp_Attack": 110,
      "Sp_Defense": 90,
      "Speed": 50
    }
  },

{
    "id": 46,
    "name": {
      "english": "Paras"
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/046%20-%20Paras.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_046_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Paras.gif",
    "base": {
      "HP": 35,
      "Attack": 70,
      "Defense": 55,
      "Sp_Attack": 45,
      "Sp_Defense": 55,
      "Speed": 25
    }
  },

{
    "id": 47,
    "name": {
      "english": "Parasect"
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/047%20-%20Parasect.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_047_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Parasect.gif",
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 80,
      "Sp_Attack": 60,
      "Sp_Defense": 80,
      "Speed": 30
    }
  },

{
    "id": 48,
    "name": {
      "english": "Venonat"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/048%20-%20Venonat.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_048_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Venonat.gif",
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 50,
      "Sp_Attack": 40,
      "Sp_Defense": 55,
      "Speed": 45
    }
  },

{
    "id": 49,
    "name": {
      "english": "Venomoth"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/049%20-%20Venomoth.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_049_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Venomoth.gif",
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 60,
      "Sp_Attack": 90,
      "Sp_Defense": 75,
      "Speed": 90
    }
  },

{
    "id": 50,
    "name": {
      "english": "Diglett"
    },
    "type": [
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/050%20-%20Diglett.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_050_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Diglett.gif",
    "base": {
      "HP": 10,
      "Attack": 55,
      "Defense": 25,
      "Sp_Attack": 35,
      "Sp_Defense": 45,
      "Speed": 95
    }
  },

{
    "id": 5,
    "name": {
      "english": "Dugtrio"
    },
    "type": [
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/051%20-%20Dugtrio.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_051_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Dugtrio.gif",
    "base": {
      "HP": 35,
      "Attack": 100,
      "Defense": 50,
      "Sp_Attack": 50,
      "Sp_Defense": 70,
      "Speed": 120
    }
  },

{
    "id": 52,
    "name": {
      "english": "Meowth"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/052%20-%20Meowth.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_052_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Meowth.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp_Attack": 40,
      "Sp_Defense": 40,
      "Speed": 90
    }
  },

{
    "id": 53,
    "name": {
      "english": "Persian"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/053%20-%20Persian.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_053_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Persian.gif",
    "base": {
      "HP": 65,
      "Attack": 70,
      "Defense": 60,
      "Sp_Attack": 65,
      "Sp_Defense": 65,
      "Speed": 115
    }
  },

{
    "id": 54,
    "name": {
      "english": "Psyduck"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/054%20-%20Psyduck.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_054_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Psyduck.gif",
    "base": {
      "HP": 50,
      "Attack": 52,
      "Defense": 48,
      "Sp_Attack": 65,
      "Sp_Defense": 50,
      "Speed": 55
    }
  },

{
    "id": 55,
    "name": {
      "english": "Golduck"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/055%20-%20Golduck.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_055_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Golduck.gif",
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 78,
      "Sp_Attack": 95,
      "Sp_Defense": 80,
      "Speed": 85
    }
  },

{
    "id": 56,
    "name": {
      "english": "Mankey"
    },
    "type": [
      "Figth"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/056%20-%20Mankey.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_056_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Mankey.gif",
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 35,
      "Sp_Attack": 35,
      "Sp_Defense": 45,
      "Speed": 70
    }
  },

{
    "id": 57,
    "name": {
      "english": "Primeape"
    },
    "type": [
      "Figth"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/057%20-%20Primeape.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_057_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Primeape.gif",
    "base": {
      "HP": 65,
      "Attack": 105,
      "Defense": 60,
      "Sp_Attack": 60,
      "Sp_Defense": 70,
      "Speed": 95
    }
  },

{
    "id": 58,
    "name": {
      "english": "Growlithe"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/058%20-%20Growlithe.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_058_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Growlithe.gif",
    "base": {
      "HP": 55,
      "Attack": 70,
      "Defense": 45,
      "Sp_Attack": 35,
      "Sp_Defense": 45,
      "Speed": 60
    }
  },

{
    "id": 59,
    "name": {
      "english": "Arcanine"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/059%20-%20Arcanine.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_059_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Arcanine.gif",
    "base": {
      "HP": 90,
      "Attack": 110,
      "Defense": 80,
      "Sp_Attack": 100,
      "Sp_Defense": 80,
      "Speed": 95
    }
  },

{
    "id": 60,
    "name": {
      "english": "Poliwag"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/060%20-%20Poliwag.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_060_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Poliwag.gif",
    "base": {
      "HP": 40,
      "Attack": 50,
      "Defense": 40,
      "Sp_Attack": 40,
      "Sp_Defense": 40,
      "Speed": 90
    }
  },

{
    "id": 61,
    "name": {
      "english": "Poliwhirl"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/061%20-%20Poliwhirl.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_061_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Poliwhirl.gif",
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 65,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 90
    }
  },

{
    "id": 62,
    "name": {
      "english": "Poliwrath"
    },
    "type": [
      "Water",
      "Fight"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/062%20-%20Poliwrath.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_062_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Poliwrath.gif",
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 95,
      "Sp_Attack": 70,
      "Sp_Defense": 90,
      "Speed": 70
    }
  },

{
    "id": 63,
    "name": {
      "english": "Abra"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/063%20-%20Abra.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_063_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Abra.gif",
    "base": {
      "HP": 25,
      "Attack": 20,
      "Defense": 15,
      "Sp_Attack": 105,
      "Sp_Defense": 55,
      "Speed": 90
    }
  },

{
    "id": 64,
    "name": {
      "english": "Kadabra"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/064%20-%20Kadabra.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_064_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Kadabra.gif",
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp_Attack": 120,
      "Sp_Defense": 70,
      "Speed": 105
    }
  },

{
    "id": 65,
    "name": {
      "english": "Alakazam"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/065%20-%20Alakazam.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_065_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Alakazam.gif",
    "base": {
      "HP": 55,
      "Attack": 50,
      "Defense": 45,
      "Sp_Attack": 135,
      "Sp_Defense": 95,
      "Speed": 120
    }
  },

{
    "id": 66,
    "name": {
      "english": "Machop"
    },
    "type": [
      "Fight"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/066%20-%20Machop.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_066_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Machop.gif",
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 50,
      "Sp_Attack": 35,
      "Sp_Defense": 35,
      "Speed": 35
    }
  },

{
    "id": 67,
    "name": {
      "english": "Machoke"
    },
    "type": [
      "Fight"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/067%20-%20Machoke.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_067_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Machoke.gif",
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 70,
      "Sp_Attack": 50,
      "Sp_Defense": 60,
      "Speed": 45
    }
  },

{
    "id": 68,
    "name": {
      "english": "Machamp"
    },
    "type": [
      "Fight"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/068%20-%20Machamp.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_068_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Machamp.gif",
    "base": {
      "HP": 90,
      "Attack": 130,
      "Defense": 80,
      "Sp_Attack": 65,
      "Sp_Defense": 85,
      "Speed": 55
    }
  },

{
    "id": 69,
    "name": {
      "english": "Bellsprout"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/069%20-%20Bellsprout.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_069_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Bellsprout.gif",
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 35,
      "Sp_Attack": 70,
      "Sp_Defense": 30,
      "Speed": 40
    }
  },

{
    "id": 70,
    "name": {
      "english": "Weepinbell"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/070%20-%20Weepinbell.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_070_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Weepinbell.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 50,
      "Sp_Attack": 85,
      "Sp_Defense": 45,
      "Speed": 55
    }
  },

{
    "id": 71,
    "name": {
      "english": "Victreebel"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/071%20-%20Victreebel.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_071_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Victreebel.gif",
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp_Attack": 100,
      "Sp_Defense": 70,
      "Speed": 70
    }
  },

{
    "id": 72,
    "name": {
      "english": "Tentacool"
    },
    "type": [
      "Water",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/072%20-%20Tentacool.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_072_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Tentacool.gif",
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 35,
      "Sp_Attack": 50,
      "Sp_Defense": 100,
      "Speed": 70
    }
  },

{
    "id": 73,
    "name": {
      "english": "Tentacruel"
    },
    "type": [
      "Water",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/073%20-%20Tentacruel.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_073_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Tentacruel.gif",
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 65,
      "Sp_Attack": 80,
      "Sp_Defense": 120,
      "Speed": 100
    }
  },

{
    "id": 74,
    "name": {
      "english": "Geodude"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/074%20-%20Geodude.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_074_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Geodude.gif",
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 100,
      "Sp_Attack": 30,
      "Sp_Defense": 30,
      "Speed": 20
    }
  },

{
    "id": 75,
    "name": {
      "english": "Graveler"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/075%20-%20Graveler.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_075_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Graveler.gif",
    "base": {
      "HP": 55,
      "Attack": 95,
      "Defense": 115,
      "Sp_Attack": 45,
      "Sp_Defense": 45,
      "Speed": 35
    }
  },

{
    "id": 76,
    "name": {
      "english": "Golem"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/076%20-%20Golem.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_076_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Golem.gif",
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 130,
      "Sp_Attack": 55,
      "Sp_Defense": 65,
      "Speed": 45
    }
  },

{
    "id": 77,
    "name": {
      "english": "Ponyta"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/077%20-%20Ponyta.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_077_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Ponyta.gif",
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 55,
      "Sp_Attack": 65,
      "Sp_Defense": 65,
      "Speed": 90
    }
  },

{
    "id": 78,
    "name": {
      "english": "Rapidash"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/078%20-%20Rapidash.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_078_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Rapidash.gif",
    "base": {
      "HP": 65,
      "Attack": 100,
      "Defense": 70,
      "Sp_Attack": 80,
      "Sp_Defense": 80,
      "Speed": 105
    }
  },

{
    "id": 79,
    "name": {
      "english": "Slowpoke"
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/079%20-%20Slowpoke.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_079_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Slowpoke.gif",
    "base": {
      "HP": 90,
      "Attack": 65,
      "Defense": 65,
      "Sp_Attack": 40,
      "Sp_Defense": 40,
      "Speed": 15
    }
  },

{
    "id": 80,
    "name": {
      "english": "Slowbro"
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/080%20-%20Slowbro.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_080_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Slowbro.gif",
    "base": {
      "HP": 95,
      "Attack": 75,
      "Defense": 110,
      "Sp_Attack": 100,
      "Sp_Defense": 80,
      "Speed": 30
    }
  },

{
    "id": 81,
    "name": {
      "english": "Magnemite"
    },
    "type": [
      "Electric",
      "Steel"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/081%20-%20Magnemite.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_081_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Magnemite.gif",
    "base": {
      "HP": 25,
      "Attack": 35,
      "Defense": 70,
      "Sp_Attack": 95,
      "Sp_Defense": 55,
      "Speed": 45
    }
  },

{
    "id": 82,
    "name": {
      "english": "Magneton"
    },
    "type": [
      "Electric",
      "Steel"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/082%20-%20Magneton.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_082_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Magneton.gif",
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 95,
      "Sp_Attack": 120,
      "Sp_Defense": 70,
      "Speed": 70
    }
  },

{
    "id": 83,
    "name": {
      "english": "Farfetch'd"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/083%20-%20Farfetch'd.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_083_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Farfetchd.gif",
    "base": {
      "HP": 52,
      "Attack": 90,
      "Defense": 55,
      "Sp_Attack": 58,
      "Sp_Defense": 62,
      "Speed": 60
    }
  },

{
    "id": 84,
    "name": {
      "english": "Doduo"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/084%20-%20Doduo.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_084_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Doduo.gif",
    "base": {
      "HP": 35,
      "Attack": 85,
      "Defense": 45,
      "Sp_Attack": 35,
      "Sp_Defense": 35,
      "Speed": 75
    }
  },

{
    "id": 85,
    "name": {
      "english": "Dodrio"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/085%20-%20Dodrio.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_085_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Dodrio.gif",
    "base": {
      "HP": 60,
      "Attack": 110,
      "Defense": 70,
      "Sp_Attack": 60,
      "Sp_Defense": 60,
      "Speed": 110
    }
  },

{
    "id": 86,
    "name": {
      "english": "Seel"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/086%20-%20Seel.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_086_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Seel.gif",
    "base": {
      "HP": 65,
      "Attack": 45,
      "Defense": 55,
      "Sp_Attack": 45,
      "Sp_Defense": 70,
      "Speed": 45
    }
  },

{
    "id": 87,
    "name": {
      "english": "Dewgong"
    },
    "type": [
      "Water",
      "Ice"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/087%20-%20Dewgong.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_087_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Dewgong.gif",
    "base": {
      "HP": 90,
      "Attack": 70,
      "Defense": 80,
      "Sp_Attack": 70,
      "Sp_Defense": 95,
      "Speed": 70
    }
  },

{
    "id": 88,
    "name": {
      "english": "Grimer"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/088%20-%20Grimer.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_088_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Grimer.gif",
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 50,
      "Sp_Attack": 40,
      "Sp_Defense": 50,
      "Speed": 25
    }
  },

{
    "id": 89,
    "name": {
      "english": "Muk"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/089%20-%20Muk.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_089_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Muk.gif",
    "base": {
      "HP": 105,
      "Attack": 105,
      "Defense": 75,
      "Sp_Attack": 65,
      "Sp_Defense": 100,
      "Speed": 50
    }
  },

{
    "id": 90,
    "name": {
      "english": "Shellder"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/090%20-%20Shellder.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_090_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Shellder.gif",
    "base": {
      "HP": 30,
      "Attack": 65,
      "Defense": 100,
      "Sp_Attack": 45,
      "Sp_Defense": 25,
      "Speed": 40
    }
  },

{
    "id": 91,
    "name": {
      "english": "Cloyster"
    },
    "type": [
      "Water",
      "Ice"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/091%20-%20Cloyster.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_091_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Cloyster.gif",
    "base": {
      "HP": 50,
      "Attack": 95,
      "Defense": 180,
      "Sp_Attack": 85,
      "Sp_Defense": 45,
      "Speed": 70
    }
  },

{
    "id": 92,
    "name": {
      "english": "Gastly"
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/092%20-%20Gastly.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_092_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Gastly.gif",
    "base": {
      "HP": 30,
      "Attack": 35,
      "Defense": 30,
      "Sp_Attack": 100,
      "Sp_Defense": 35,
      "Speed": 80
    }
  },

{
    "id": 93,
    "name": {
      "english": "Haunter"
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/093%20-%20Haunter.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_093_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Haunter.gif",
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 45,
      "Sp_Attack": 115,
      "Sp_Defense": 55,
      "Speed": 95
    }
  },

{
    "id": 94,
    "name": {
      "english": "Gengar"
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/094%20-%20Gengar.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_094_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Gengar.gif",
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 60,
      "Sp_Attack": 130,
      "Sp_Defense": 75,
      "Speed": 110
    }
  },

{
    "id": 95,
    "name": {
      "english": "Onyx"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/095%20-%20Onix.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_095_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Onix.gif",
    "base": {
      "HP": 35,
      "Attack": 45,
      "Defense": 160,
      "Sp_Attack": 30,
      "Sp_Defense": 45,
      "Speed": 70
    }
  },

{
    "id": 96,
    "name": {
      "english": "Drowzee"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/096%20-%20Drowzee.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_096_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Drowzee.gif",
    "base": {
      "HP": 60,
      "Attack": 48,
      "Defense": 45,
      "Sp_Attack": 43,
      "Sp_Defense": 90,
      "Speed": 42
    }
  },

{
    "id": 97,
    "name": {
      "english": "Hypno"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/097%20-%20Hypno.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_097_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Hypno.gif",
    "base": {
      "HP": 85,
      "Attack": 73,
      "Defense": 70,
      "Sp_Attack": 73,
      "Sp_Defense": 115,
      "Speed": 67
    }
  },

{
    "id": 98,
    "name": {
      "english": "Krabby"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/098%20-%20Krabby.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_098_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Krabby.gif",
    "base": {
      "HP": 30,
      "Attack": 105,
      "Defense": 90,
      "Sp_Attack": 25,
      "Sp_Defense": 25,
      "Speed": 50
    }
  },

{
    "id": 99,
    "name": {
      "english": "Kingler"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/099%20-%20Kingler.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_099_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Kingler.gif",
    "base": {
      "HP": 55,
      "Attack": 130,
      "Defense": 115,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 75
    }
  },

{
    "id": 100,
    "name": {
      "english": "Voltorb"
    },
    "type": [
      "Electric"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/100%20-%20Voltorb.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_100_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Voltorb.gif",
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 50,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 100
    }
  },

{
    "id": 101,
    "name": {
      "english": "Electrode"
    },
    "type": [
      "Electric"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/101%20-%20Electrode.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_101_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Electrode.gif",
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp_Attack": 80,
      "Sp_Defense": 80,
      "Speed": 150
    }
  },

{
    "id": 102,
    "name": {
      "english": "Exeggcute"
    },
    "type": [
      "Grass",
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/102%20-%20Exeggcute.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_102_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Exeggcute.gif",
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 80,
      "Sp_Attack": 60,
      "Sp_Defense": 45,
      "Speed": 40
    }
  },

{
    "id": 103,
    "name": {
      "english": "Exeggutor"
    },
    "type": [
      "Grass",
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/103%20-%20Exeggutor.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_103_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Exeggutor.gif",
    "base": {
      "HP": 95,
      "Attack": 95,
      "Defense": 85,
      "Sp_Attack": 125,
      "Sp_Defense": 75,
      "Speed": 55
    }
  },

{
    "id": 104,
    "name": {
      "english": "Cubone"
    },
    "type": [
      "Groudn"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/104%20-%20Cubone.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_104_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Cubone.gif",
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 95,
      "Sp_Attack": 40,
      "Sp_Defense": 50,
      "Speed": 35
    }
  },

{
    "id": 105,
    "name": {
      "english": "Marowak"
    },
    "type": [
      "Ground"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/105%20-%20Marowak.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_105_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Marowak.gif",
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 110,
      "Sp_Attack": 50,
      "Sp_Defense": 80,
      "Speed": 45
    }
  },

{
    "id": 106,
    "name": {
      "english": "Hitmonlee"
    },
    "type": [
      "Fight"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/106%20-%20Hitmonlee.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_106_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Hitmonlee.gif",
    "base": {
      "HP": 50,
      "Attack": 120,
      "Defense": 53,
      "Sp_Attack": 35,
      "Sp_Defense": 110,
      "Speed": 87
    }
  },

{
    "id": 107,
    "name": {
      "english": "Hitmonchan"
    },
    "type": [
      "Fight"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/107%20-%20Hitmonchan.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_107_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Hitmonchan.gif",
    "base": {
      "HP": 50,
      "Attack": 105,
      "Defense": 79,
      "Sp_Attack": 35,
      "Sp_Defense": 110,
      "Speed": 76
    }
  },

{
    "id": 108,
    "name": {
      "english": "Lickitung"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/108%20-%20Lickitung.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_108_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Lickitung.gif",
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 75,
      "Sp_Attack": 60,
      "Sp_Defense": 75,
      "Speed": 30
    }
  },

{
    "id": 109,
    "name": {
      "english": "Koffing"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/109%20-%20Koffing.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_109_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Koffing.gif",
    "base": {
      "HP": 40,
      "Attack": 65,
      "Defense": 95,
      "Sp_Attack": 60,
      "Sp_Defense": 45,
      "Speed": 35
    }
  },

{
    "id": 110,
    "name": {
      "english": "Weezing"
    },
    "type": [
      "Poison"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/110%20-%20Weezing.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_110_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Weezing.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 120,
      "Sp_Attack": 85,
      "Sp_Defense": 70,
      "Speed": 60
    }
  },

{
    "id": 111,
    "name": {
      "english": "Rhyhorn"
    },
    "type": [
      "Ground",
      "Rock"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/111%20-%20Rhyhorn.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_111_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Rhyhorn.gif",
    "base": {
      "HP": 80,
      "Attack": 85,
      "Defense": 95,
      "Sp_Attack": 60,
      "Sp_Defense": 45,
      "Speed": 35
    }
  },

{
    "id": 112,
    "name": {
      "english": "Rhydon"
    },
    "type": [
      "Ground",
      "Rock"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/112%20-%20Rhydon.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_112_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Rhydon.gif",
    "base": {
      "HP": 105,
      "Attack": 130,
      "Defense": 120,
      "Sp_Attack": 45,
      "Sp_Defense": 45,
      "Speed": 40
    }
  },

{
    "id": 113,
    "name": {
      "english": "Chansey"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/113%20-%20Chansey.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_113_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Chansey.gif",
    "base": {
      "HP": 250,
      "Attack": 5,
      "Defense": 5,
      "Sp_Attack": 35,
      "Sp_Defense": 105,
      "Speed": 50
    }
  },

{
    "id": 114,
    "name": {
      "english": "Tangela"
    },
    "type": [
      "Grass"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/114%20-%20Tangela.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_114_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Tangela.gif",
    "base": {
      "HP": 65,
      "Attack": 55,
      "Defense": 115,
      "Sp_Attack": 100,
      "Sp_Defense": 40,
      "Speed": 60
    }
  },

{
    "id": 115,
    "name": {
      "english": "Kangaskhan"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/115%20-%20Kangaskhan.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_115_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Kangaskhan.gif",
    "base": {
      "HP": 105,
      "Attack": 95,
      "Defense": 80,
      "Sp_Attack": 40,
      "Sp_Defense": 80,
      "Speed": 90
    }
  },

  {
    "id": 116,
    "name": {
      "english": "Hosrsea"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/116%20-%20Horsea.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_116_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Horsea.gif",
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 70,
      "Sp_Attack": 70,
      "Sp_Defense": 25,
      "Speed": 60
    }
  },

{
    "id": 117,
    "name": {
      "english": "Seadra"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/117%20-%20Seadra.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_117_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Seadra.gif",
    "base": {
      "HP": 55,
      "Attack": 65,
      "Defense": 95,
      "Sp_Attack": 95,
      "Sp_Defense": 45,
      "Speed": 85
    }
  },

{
    "id": 118,
    "name": {
      "english": "Goldeen"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/118%20-%20Goldeen.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_118_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Goldeen.gif",
    "base": {
      "HP": 45,
      "Attack": 67,
      "Defense": 60,
      "Sp_Attack": 35,
      "Sp_Defense": 50,
      "Speed": 63
    }
  },
{
    "id": 119,
    "name": {
      "english": "Seaking"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/119%20-%20Seaking.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_119_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Seaking.gif",
    "base": {
      "HP": 80,
      "Attack": 92,
      "Defense": 65,
      "Sp_Attack": 65,
      "Sp_Defense": 80,
      "Speed": 68
    }
  },

{
    "id": 120,
    "name": {
      "english": "Staryu"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/120%20-%20Staryu.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_120_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Staryu.gif",
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 55,
      "Sp_Attack": 70,
      "Sp_Defense": 55,
      "Speed": 85
    }
  },

{
    "id": 121,
    "name": {
      "english": "Starmie"
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/121%20-%20Starmie.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_121_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Starmie.gif",
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 85,
      "Sp_Attack": 100,
      "Sp_Defense": 85,
      "Speed": 115
    }
  },

{
    "id": 122,
    "name": {
      "english": "Mr. Mime"
    },
    "type": [
      "Psychic",
      "Fairy"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/122%20-%20Mr. Mime.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_122_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Mr.-Mime.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 65,
      "Sp_Attack": 100,
      "Sp_Defense": 120,
      "Speed": 90
    }
  },

  {
    "id": 123,
    "name": {
      "english": "Scyther"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/123%20-%20Scyther.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_123_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Scyther.gif",
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 80,
      "Sp_Attack": 55,
      "Sp_Defense": 80,
      "Speed": 105
    }
  },

{
    "id": 124,
    "name": {
      "english": "Jynx"
    },
    "type": [
      "Ice",
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/124%20-%20Jynx.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_124_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Jynx.gif",
    "base": {
      "HP": 65,
      "Attack": 50,
      "Defense": 35,
      "Sp_Attack": 115,
      "Sp_Defense": 95,
      "Speed": 95
    }
  },

{
    "id": 125,
    "name": {
      "english": "Electabuzz"
    },
    "type": [
      "Electric"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/125%20-%20Electabuzz.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_125_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Electabuzz.gif",
    "base": {
      "HP": 65,
      "Attack": 83,
      "Defense": 57,
      "Sp_Attack": 95,
      "Sp_Defense": 85,
      "Speed": 105
    }
  },

{
    "id": 126,
    "name": {
      "english": "Magmar"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/126%20-%20Magmar.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_126_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Magmar.gif",
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 57,
      "Sp_Attack": 100,
      "Sp_Defense": 85,
      "Speed": 93
    }
  },

{
    "id": 127,
    "name": {
      "english": "Pinsir"
    },
    "type": [
      "Bug"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/127%20-%20Pinsir.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_127_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Pinsir.gif",
    "base": {
      "HP": 65,
      "Attack": 125,
      "Defense": 100,
      "Sp_Attack": 55,
      "Sp_Defense": 70,
      "Speed": 85
    }
  },

{
    "id": 128,
    "name": {
      "english": "Tauros"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/128%20-%20Tauros.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_128_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Tauros.gif",
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 95,
      "Sp_Attack": 40,
      "Sp_Defense": 70,
      "Speed": 110
    }
  },

{
    "id": 129,
    "name": {
      "english": "Magikarp"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/129%20-%20Magikarp.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_129_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Magikarp.gif",
    "base": {
      "HP": 20,
      "Attack": 10,
      "Defense": 55,
      "Sp_Attack": 15,
      "Sp_Defense": 20,
      "Speed": 80
    }
  },

{
    "id": 130,
    "name": {
      "english": "Gyarados"
    },
    "type": [
      "Water",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/130%20-%20Gyarados.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_130_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Gyarados.gif",
    "base": {
      "HP": 95,
      "Attack": 125,
      "Defense": 79,
      "Sp_Attack": 60,
      "Sp_Defense": 100,
      "Speed": 81
    }
  },

{
    "id": 132,
    "name": {
      "english": "Ditto"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/132%20-%20Ditto.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_132_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Ditto.gif",
    "base": {
      "HP": 48,
      "Attack": 48,
      "Defense": 48,
      "Sp_Attack": 48,
      "Sp_Defense": 48,
      "Speed": 48
    }
  },

{
    "id": 133,
    "name": {
      "english": "Eevee"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/133%20-%20Eevee.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_133_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Eevee.gif",
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 50,
      "Sp_Attack": 45,
      "Sp_Defense": 65,
      "Speed": 55
    }
  },

{
    "id": 134,
    "name": {
      "english": "Vaporeon"
    },
    "type": [
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/134%20-%20Vaporeon.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_134_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Vaporeon.gif",
    "base": {
      "HP": 130,
      "Attack": 65,
      "Defense": 60,
      "Sp_Attack": 110,
      "Sp_Defense": 95,
      "Speed": 65
    }
  },

{
    "id": 135,
    "name": {
      "english": "Jolteon"
    },
    "type": [
      "Electric"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/135%20-%20Jolteon.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_135_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Jolteon.gif",
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 60,
      "Sp_Attack": 110,
      "Sp_Defense": 95,
      "Speed": 130
    }
  },

{
    "id": 136,
    "name": {
      "english": "Flareon"
    },
    "type": [
      "Fire"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/136%20-%20Flareon.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_136_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Flareon.gif",
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp_Attack": 95,
      "Sp_Defense": 110,
      "Speed": 65
    }
  },

{
    "id": 137,
    "name": {
      "english": "Porygon"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/137%20-%20Porygon.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_137_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Porygon.gif",
    "base": {
      "HP": 65,
      "Attack": 60,
      "Defense": 70,
      "Sp_Attack": 85,
      "Sp_Defense": 75,
      "Speed": 40
    }
  },

{
    "id": 138,
    "name": {
      "english": "Omanyte"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/138%20-%20Omanyte.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_138_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Omanyte.gif",
    "base": {
      "HP": 35,
      "Attack": 40,
      "Defense": 100,
      "Sp_Attack": 90,
      "Sp_Defense": 55,
      "Speed": 35
    }
  },

{
    "id": 139,
    "name": {
      "english": "Omastar"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/139%20-%20Omastar.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_139_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Omastar.gif",
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 125,
      "Sp_Attack": 115,
      "Sp_Defense": 70,
      "Speed": 55
    }
  },

{
    "id": 140,
    "name": {
      "english": "Kabuto"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/140%20-%20Kabuto.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_140_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Kabuto.gif",
    "base": {
      "HP": 30,
      "Attack": 80,
      "Defense": 90,
      "Sp_Attack": 55,
      "Sp_Defense": 45,
      "Speed": 55
    }
  },

{
    "id": 141,
    "name": {
      "english": "Kabutops"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/141%20-%20Kabutops.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_141_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Kabutops.gif",
    "base": {
      "HP": 60,
      "Attack": 115,
      "Defense": 105,
      "Sp_Attack": 65,
      "Sp_Defense": 70,
      "Speed": 80
    }
  },

{
    "id": 142,
    "name": {
      "english": "Aerodactyl"
    },
    "type": [
      "Rock",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/142%20-%20Aerodactyl.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_142_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Aerodactyl.gif",
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp_Attack": 60,
      "Sp_Defense": 75,
      "Speed": 130
    }
  },

{
    "id": 143,
    "name": {
      "english": "Snorlax"
    },
    "type": [
      "Normal"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/143%20-%20Snorlax.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_143_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Snorlax.gif",
    "base": {
      "HP": 160,
      "Attack": 110,
      "Defense": 65,
      "Sp_Attack": 65,
      "Sp_Defense": 110,
      "Speed": 30
    }
  },

{
    "id": 144,
    "name": {
      "english": "Articuno"
    },
    "type": [
      "Ice",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/144%20-%20Articuno.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_144_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Articuno.gif",
    "base": {
      "HP": 90,
      "Attack": 85,
      "Defense": 100,
      "Sp_Attack": 95,
      "Sp_Defense": 125,
      "Speed": 85
    }
  },

{
    "id": 145,
    "name": {
      "english": "Zapdos"
    },
    "type": [
      "Electric",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/145%20-%20Zapdos.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_145_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Zapdos.gif",
    "base": {
      "HP": 90,
      "Attack": 90,
      "Defense": 85,
      "Sp_Attack": 125,
      "Sp_Defense": 90,
      "Speed": 100
    }
  },

{
    "id": 146,
    "name": {
      "english": "Moltres"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/146%20-%20Moltres.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_146_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Moltres.gif",
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 90,
      "Sp_Attack": 125,
      "Sp_Defense": 85,
      "Speed": 90
    }
  },

{
    "id": 147,
    "name": {
      "english": "Dratini"
    },
    "type": [
      "Dragon"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/147%20-%20Dratini.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_147_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Dratini.gif",
    "base": {
      "HP": 41,
      "Attack": 64,
      "Defense": 45,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 50
    }
  },

{
    "id": 148,
    "name": {
      "english": "Dragonair"
    },
    "type": [
      "Dragon"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/148%20-%20Dragonair.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_148_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Dragonair.gif",
    "base": {
      "HP": 61,
      "Attack": 84,
      "Defense": 65,
      "Sp_Attack": 70,
      "Sp_Defense": 70,
      "Speed": 70
    }
  },

{
    "id": 149,
    "name": {
      "english": "Dragonite"
    },
    "type": [
      "Dragon",
      "Flying"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/149%20-%20Dragonite.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_149_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Dragonite.gif",
    "base": {
      "HP": 91,
      "Attack": 134,
      "Defense": 95,
      "Sp_Attack": 100,
      "Sp_Defense": 100,
      "Speed": 80
    }
  },

{
    "id": 150,
    "name": {
      "english": "Mewtwo"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/150%20-%20Mewtwo.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_150_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Mewtwo.gif",
    "base": {
      "HP": 106,
      "Attack": 110,
      "Defense": 90,
      "Sp_Attack": 154,
      "Sp_Defense": 90,
      "Speed": 130
    }
  },

{
    "id": 151,
    "name": {
      "english": "Mew"
    },
    "type": [
      "Psychic"
    ],
    "crie": "https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-cries/master/151%20-%20Mew.wav",
    "sprite": "https://projectpokemon.org/images/sprites-models/pgo-sprites/pokemon_icon_151_00.png",
    "animation":"https://raw.githubusercontent.com/isaac-glitchcode/pokemon-g1-sprites/master/Mew.gif",
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp_Attack": 100,
      "Sp_Defense": 100,
      "Speed": 100
    }
  },



]);
  const [typeSelected, setTypeSelected] = useState("All");

  const [pokeSelected, setPokeSelected] = useState(" ");

  const [namePoke, setNamePoke] = useState("");

  const handleTypeSelect = (event) =>{
    setTypeSelected(event.target.value);
  }
  const selectPokemon = (p) => {
   setPokeSelected(p)
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
                        return pokemon.name.english.includes(namePoke)
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
