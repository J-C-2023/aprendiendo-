import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from '../Nav/Nav.module.css';



const Nav = ({onSearch}) => {
    return(

        <nav>
            <div className={styles.div}>
            <Link to='/' style={{color:'rgba(18, 100, 142, 0.825)'}}>LOGOUT</Link>
            <br />
            <Link to='/about' style={{color:'rgba(18, 100, 142, 0.825)'}}>About</Link>
            <br />
            <Link to='/home' style={{color:'rgba(18, 100, 142, 0.825)'}}>Home</Link>  
            
            <Link to='/favorites' style={{color:'rgba(18, 100, 142, 0.825)'}}>Favorites</Link>  
            
            </div>
            <SearchBar onSearch={onSearch}/>    
            
        </nav>

    )
}

export default Nav;

// la pregunta te dice que en nav le agregues link al componente About y Home esta es la forma de hacer ojo <Link to='about'>About</Link> ojo 

//////////////////////////////////////



/*import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';



const Nav = ({ onSearch }) => {
    return(

        <nav>
            <Link to='about'>About</Link>
            <Link to='home'>Home</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>

    )
}

export default Nav;

// la pregunta te dice que en nav le agregues link al componente About y Home esta es la forma de hacer ojo <Link to='about'>About</Link> ojo */