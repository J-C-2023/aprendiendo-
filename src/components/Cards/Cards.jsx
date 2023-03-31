
import Card from '../Card/Card';

 function Cards({ characters, onClose }) {//aqui esta llegando destructure {characters}
   
   return (
      <div>
         {
         characters.map(({id, name, species, gender, image}) => {
            return <Card // vas  a retornar card por cada uno de sus componentes 
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
           
            onClose={() => onClose(id)}
            />
         })
         }
        
      </div>
   )

   
}

export default Cards
