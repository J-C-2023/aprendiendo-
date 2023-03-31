import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css"

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    
    })


    const [errors, setErrors] = useState({
        username: '',
        password: ''

    })
    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

    
 

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    
 return(

      <div className={styles.div}>
        <form onSubmit={handleSubmit}>

        <label htmlFor='username' style={{color:'rgb(211, 233, 220)'}}> Username: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p >{errors.username}</p>}

            <label htmlFor='password' style={{color:'rgb(211, 233, 220)'}}> Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}

            <button>LOGIN</button>
         </form>
         </div>
      
         
    )
}

export default Form;





/////////////////////////////////////////////////


/*import {useState} from "react";

const Form = ( ) => {

const [userData, setUserData] = useState({
    username: '',
    password:''

})

const handleInputChange = (event) => {
    setUserData({
        ...state,
        [event.target.name]: event.target.value
    })
}


    return(
         <form>
            <label htmlFor='username'>Username:</label>
            <input type='text' name='username' value={userData.username} onChange={handleChange}/>

            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' value={userData.password} onChange={handleChange} />

            <button>LOGIN</button>

         </form>
    )
    }*/