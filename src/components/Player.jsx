import { useState , useRef} from "react";


export default function Player() {
    const [enteredName , setEnteredName]=useState(null);

  
   const playerName = useRef();


   function handleSubmit(){
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
     
   }
  return (
    <section id="player">
      <h2>Welcome { enteredName ?? 'unknown entity'}</h2>
      <p>
        <input  type="text"   ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
