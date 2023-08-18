import Card from './Card';

export default function Cards(props) {
   const {characters} = props
 
   //console.log(characters)
   return (<div>
      {characters.map(data=>( 
         <Card key={characters.id} 
         props={data}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />   
      ))}
   </div>);
}
