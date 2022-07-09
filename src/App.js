import "./App.css"
import React, {Component} from 'react';
import borboleta from './img/borboleta.jpg'

class App extends Component{
 
  state ={
   sobreMim:[
    {
      name: "Quel",
      age: 22,
      favoriteFood:"strogonoff",
      favoriteSongs: ["Do I Wanna Know?","Até O Sol Quis Ver","Samba in Paris"]
    }
   ]
  }

 render(){
  return(
    <div className="diary">
      <div className="myPerson">
       <h1> I'm {this.state.sobreMim[0].name}</h1>
       <h2>I'm  {this.state.sobreMim[0].age} years old</h2>
       <h3>My favorite food is {this.state.sobreMim[0].favoriteFood} </h3>
     </div>
     <ol>
      <li>My favorite Arctic Mancs song is "{this.state.sobreMim[0].favoriteSongs[0]}"</li>
      <li>My favorite Pericles song is "{this.state.sobreMim[0].favoriteSongs[1]}"</li>
      <li>My favorite  Baco Exu do Blues song is "{this.state.sobreMim[0].favoriteSongs[2]}"</li>
     </ol>
     <img src={borboleta}/>
     <p>My diary</p>
    </div>
  )
 }
}
export default App