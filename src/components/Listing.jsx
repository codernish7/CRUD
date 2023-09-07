import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List(props){
    console.log(props.value)

    const[currentPage,setCurrentpage]=useState(1)

    let itemsPerPage=3

    let pagefactor=currentPage*itemsPerPage

    let indexx=pagefactor-itemsPerPage

   


    
    const[sort,setSort]=useState('')
    const [searchTerm, setSearchTerm] = useState("")
    function handleSort(e){
        e.preventDefault()
        console.log(e.target.value)
        setSort(e.target.value)
    }

    // function sortedList(){
    //     if(sort==='quantity'){
    //         return[...props.value].sort((a,b)=>a.quantity-b.quantity)
    //     }
    //     if(sort==='price'){
    //         return[...props.value].sort((a,b)=>a.price-b.price)
    //     }
    //     return props.value
    // }

    // const sortedProducts = sortedList()
    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
      }
    
      function sortedAndFilteredList() {
        // Filter the products based on the search term
        const filteredList = props.value.filter((items) =>items.title.toLowerCase().includes(searchTerm.toLowerCase()) || items.desc.toLowerCase().includes(searchTerm.toLowerCase()));
    
        // Apply sorting based on 'sort' value
        if (sort === "quantity") {
          return [...filteredList].sort((a, b) => a.quantity - b.quantity);
        }
        if (sort === "price") {
          return [...filteredList].sort((a, b) => a.price - b.price);
        }

        if (sort ==="quantity-rev"){
            return [...filteredList].sort((a,b)=>b.quantity - a.quantity);
        }

        if (sort==="price-rev"){
            return [...filteredList].sort((a,b)=>b.price - a.price)
        }
        return filteredList;
      }
    
      const sortedAndFilteredProducts = sortedAndFilteredList();
    
      let range=sortedAndFilteredProducts.slice(indexx,pagefactor)
      const pageNum= Math.ceil(sortedAndFilteredProducts.length/itemsPerPage)

      let pagination=Array.from({length:pageNum},(_,index)=>index+1)

      function handlePageClick(pageNumber){
        setCurrentpage(pageNumber)
      }

    return(
        <div className="header">
            <div className="searchsort">
            <div className="sorter">
            <label htmlFor="sortBY">Sort by</label>
            <select value={sort} onChange={handleSort} id="sortBY" >
                <option value="" disabled></option>
                <option value="quantity">quantity</option>
                <option value="price">price</option>
                <option value="quantity-rev">quantity-high to low</option>
                <option value="price-rev">price-high to low</option>
            </select>
            </div>
            <div className="searchbox">
            <label htmlFor="search">Search: </label>
            <input type="text" value={searchTerm} onChange={handleSearchChange} id="search" placeholder="Search by title or description"/>
            </div>
            </div>
            <br></br>
            {/* <ul>
            <li><Link to="/">create</Link></li>
            <li><Link to="/list">product listing</Link></li>
        </ul> */}
             <table>
         <thead>
      <tr>
          <th>Sr No.</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Actions</th>
          
      </tr>
      
      
      </thead>
      <tbody>
        {range.map((items,index)=>{

            return(
                <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{items.title}</td>
                    <td>{items.desc}</td>
                    <td>{items.price}</td>
                    <td>{items.quantity}</td>
                    <td>{items.category}</td>
                   <td> <button onClick={()=>props.delete(items.id)}>delete</button>
                    <Link to={`/edit/${items.id}`}><button>edit</button></Link></td>
                
                    
                </tr>
               
                </>
                
            
            )
        })}
         
        </tbody>
        </table>
        <div className="pages">
            {pagination.map((pageNumber)=>
                            <button key={pageNumber} onClick={()=>handlePageClick(pageNumber)} className={`pagebutton ${currentPage===pageNumber?'active':''}`}>
                              {pageNumber}
                            </button>)}
        </div>
      
        </div>
    )
}