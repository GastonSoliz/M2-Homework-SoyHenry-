export default function Card(prop) {
   const {character,onClose,key} = prop;
   //console.log(props)
   
   //console.log(onClose);
   
   return (
      <div>
         <button onClick={()=>{onClose(character.id)}}>X</button>
         <h2>Name: {character.name}</h2>
         <h2>Status: {character.status}</h2>
         <h2>Species:{character.species}</h2>
         <h2>Gender: {character.gender}</h2>
         <h2>{character.origin.name}</h2> 
         <img src={character.image} alt='' />  
      </div>
   );
}