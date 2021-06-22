import React ,{useState} from 'react';
import {Switch, Route, Link} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// data movie
import {MovieData} from './MovieData';
// add movie 
import AddMovie from './Components/AddMovie';
// movie list
import MovieList from './Components/MovieList';
//filter movie
import Filter from './Components/Filter';
// trailer movie 
import Trailer from './Components/Trailer';

import { Navbar,Form} from 'react-bootstrap';




const  App =() =>{
  const[movies,setMovies] =useState(MovieData);

  const [search,setSearch] =useState("");
  // Add function movie 
  const Add =(newMovie) => {
    setMovies([...movies,newMovie])
  };
  
  return (
    <div className="App">

        <Navbar bg="white" expand="lg" className="py-3" >
            <Navbar.Brand className="responsive-navbar-nav"> 
            <Link to="/" className="home">Home</Link>
            </Navbar.Brand>            
              
              <Form inline >
                
                <Filter setSearch={setSearch}/>
                <AddMovie Add={Add}/>
                
              </Form>
           
          </Navbar>

          <Switch>
              <Route exact path="/"> 
     
             <MovieList movies ={movies} search={search} />
                </Route> 
             

           {movies.map(el=> <Route path={`/Description/${el.id}`}> <Trailer
              title={el.title}
              description={el.description}
              rating={el.rating}
              trailer={el.trailer}
               />
           
            </Route>)}
           </Switch>

    
      
    </div>
  );
}

export default App;
