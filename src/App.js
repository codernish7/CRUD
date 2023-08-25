import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import { useEffect, useState } from 'react';
import List from './components/Listing';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  const [result,setResult]=useState(storage())
  function onsubmit(product){
  
    setResult([...result,product])
  }
  function storage(){
    const storageData=localStorage.getItem('data')
    if(storageData){
      return JSON.parse(storageData)
    }
    else{
      return []
    }
  }

  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(result))
  },[result])
  
function handledelete(Id){
  let copy=result.filter((items)=>items.id!==Id)
 
  setResult(copy)
}
function handleedit(product){
  let indexx=result.findIndex((items)=>items.id===product.id)
  let copy=result.map((items)=>items)
  copy[indexx]=product
  setResult(copy)

}

 const[isLoggedin,setIsLoggedin]=useState(localStorage.getItem('isLoggedin')==='true')
 
 useEffect(()=>{
  const token=JSON.parse(localStorage.getItem('isLoggedin')) || false
  setIsLoggedin(token)
 },[])


 useEffect(()=>{
  localStorage.setItem('isLoggedin',JSON.stringify(isLoggedin))
 },[isLoggedin])



  
  
  return (
    <div className='parent'>
    <Router>
      <Navbar/>
      {isLoggedin?
    
    <Routes>
    <>
     
     <Route exact path="/" element={<Create object={onsubmit}/>}/>
     <Route exact path="/list" element={<List value={result} delete={handledelete} setValues={setResult}/>}/>
     <Route exact path="/edit/:editID" element={<Edit  edit={handleedit} updated={result}/>}/>
    
    </>
    </Routes>:
    <Routes>
      <Route exact path="/" element={<Login loginStatus={setIsLoggedin} />}/>
    </Routes>}
    </Router>
    </div>
  );
}

export default App;
