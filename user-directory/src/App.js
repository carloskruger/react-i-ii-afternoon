import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './reset.css';
import './App.css';
import data from './data/data';

class App extends Component {
  constructor(){
    super();
    this.state = {
             id: 1,
        name: { first: "Waylin", last: "Lumsdon" },
        city: "Likiep",
        country: "Marshall Islands",
        employer: "Twinder",
        title: "Physical Therapy Assistant",
        favoriteMovies: [
          "That Night in Varennes (Nuit de Varennes, La)",
          "Spy(ies) (Espion(s))",
          "Klip (Clip)"
        ]   
    }
  }

  goUp(e,data){
    
    e.preventDefault();
     let currentId = this.state.id
  
     if(currentId < data.length){
       currentId += 1
     } else 
     {currentId = 1}
    
     for(let i = 0; i < data.length; i++){
       if(currentId === data[i].id){
         this.setState({
           id: currentId,
           name: data[i].name,
           city: data[i].city,
          country: data[i].country,
            employer: data[i].employer,
            title: data[i].title,
          favoriteMovies: data[i].favoriteMovies

         })
       }
     }

  }

  goDown(e,data){
    
    e.preventDefault();
     let currentId = this.state.id
    
     if(currentId > 1){
       currentId -= 1
     } else 
     {currentId = data.length}
  
     for(let i = 0; i < data.length; i++){
       if(currentId === data[i].id){
         this.setState({
           id: currentId,
           name: data[i].name,
           city: data[i].city,
          country: data[i].country,
            employer: data[i].employer,
            title: data[i].title,
          favoriteMovies: data[i].favoriteMovies

         })
       }
     }

  }



  render(){
    let moviesMap = this.state.favoriteMovies.map((elem, idx) => {
      return <li>{idx + 1}.  {elem}</li>
  })
  return (
    <div>
<header><h1>Home</h1></header>
<div className="big-container">

   
    {/* card holding user info */}
  <div className="userInformation">
  <div className="page-no-holder">
        <span ><h1>{this.state.id}/{data.length}</h1></span>
    </div>
      <h1>{this.state.name.first} {this.state.name.last}</h1>
      <br></br>
      <h2><b>From:</b> {this.state.city},{this.state.country} </h2>
      <h2><b>Employer:</b> {this.state.employer}</h2>
      <br></br>
      <h2><b>Favorite Movies:</b></h2>
      {moviesMap}
      </div>
  {/* card holding user info */}
<div className="footer">
  <span onClick={ e => this.goDown(e,data)}> &lt; Previous</span>
  <span  onClick={ e => this.goUp(e,data)}> Next &gt;</span>
</div>
</div>
    </div>
    
    
  );
  }
}

export default App;
