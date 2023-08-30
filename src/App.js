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
import Navbar2 from './components/Navbar2';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar1';

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

  let flag=JSON.parse(localStorage.getItem('log'))===true
  
  const[islogged,setLog]=useState(flag)


  
  
  return (
    <div className='parent'>
    <Router>
      
    
    {islogged?<><Navbar2 logout={setLog}/><Routes>
    
     
    <Route exact path="/" element={<Create object={onsubmit}/>}/>
    <Route exact path="/list" element={<List value={result} delete={handledelete} setValues={setResult}/>}/>
    <Route exact path="/edit/:editID" element={<Edit  edit={handleedit} updated={result}/>}/>
   
   
   </Routes></>:<>
   <Navbar/>
   <Routes>
      
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login cred={setLog}/>}/>
    </Routes></>}
    
   
    </Router>
    </div>
  );
}

export default App;
