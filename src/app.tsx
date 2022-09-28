import React,{FunctionComponent,useState,useEffect} from 'react'; // import du module React
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';

  
//React.FC => cela signifie Fonction Component  
// Composant sous forme de fonction ou sous forme de classe
//React encourage les composants sous forme de Fonction.

const App: FunctionComponent = () => {
const [name,setName] = useState<String>('Moungari'); //destructuring <String> permet de type les données dans notre etat Name ici un type String
const [pokemons,setPokemons] = useState<Pokemon[]>([]);

useEffect(()=> {setPokemons(POKEMONS);},[]);


   
//partie JSX expression JSX
 return (
    <div> 
       <PokemonList/> 
       
    </div>
    

 )
}
  
export default App;