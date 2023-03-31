import { useState } from 'react';


function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('')

   const handleChange = (event) => { // esta funcion es la encargada cada ves que el usuario haga cambio.
      setCharacter(event.target.value)
      }



   return (
      <div>
      <input type='search' value={character} onChange={handleChange}/>
      <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
export default SearchBar;


/////////////////////////////////////////////


/*import { useState } from 'react';


function SearchBar({onSearch}) {
const [character, setCharacter] = useState('')

const handleChange = (event) => { // esta funcion es la encargada cada ves que el usuario haga cambio.
setCharacter(event.target.value)
}


   return (
      <div>
      <input type='search' value={character} onChange={handleChange}/>
      <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
export default SearchBar;*/