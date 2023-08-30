import Card from './Card';

export default function Cards({characters,onClose}) {
   //console.log(characters)
   return (<div>
      {characters.map(ch=>( 
         <Card key={ch.id} character={ch} onClose={onClose}/>   
      ))
      }
   </div>);
}
