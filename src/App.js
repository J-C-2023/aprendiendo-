
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App () {

const location = useLocation();
const navigate = useNavigate();
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false);

 const username = 'Los-mejoresProgramadores@soyhenry.com';
 const password = '2563/jl';

 function login(userData) {
  if(userData.username === username && userData.password === password){
  setAccess(true);
  navigate('/home');
 }
}



 useEffect(() => {
  !access && navigate('/')
 }, [access])

  function onSearch(character) {

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('No hay personajes con ese ID');
        }
      })
  }

const onClose = (id) => {
  setCharacters(
    characters.filter(character => character.id !== id)
  )
  
  
 }


return (

  <div className={styles.App}>

    {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} /> } 

    {/* aqui preguntas si el pathname es = a''/' o estas en la pagina principal vas a mostarat a  <Form/> de lo contrario se mostrara nav. */}

    
    
    <Routes>
    <Route path='/Home' element={<Cards
      onClose={onClose}
      characters={characters}
      />}/>

      
      <Route path='/about' element={<About /> }/>

      <Route path='/detail/:detailId' element={<Detail /> }/>
      <Route path='/favorites' element={<Favorites/>}/>

    
    </Routes>
    
  </div>
 )
}

export default App;
// para la ruta cards te esta pidiendo que la enrutes a hoe pero que tines que hacer antes de enrutar ? tienes que raer el routes

//: los dos puntos son parans y los que estan al lado derecho  representan variables ojo.







///////////////////////////////////////
//`https://rickandmortyapi.com/api/character/${character}`

