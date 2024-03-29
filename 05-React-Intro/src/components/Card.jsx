export default function Card(prop) {
   const {props,onClose} = prop;
   //console.log(props)
   
   //console.log(onClose);
   
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Species:{props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>{props.origin.name}</h2> 
         <img src={props.image} alt='' />  
      </div>
   );
}