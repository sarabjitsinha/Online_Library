import "react-router-dom"
import { useState } from "react";
import "./booklist.css"
import { mockdata } from "../Utils/Mockdata";
import Book from "./Book";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dfbook from "../assets/dfbook.jpg"

function Booklist(){
    const [catval,setcatval]=useState('')
    const [bookdata,setbookdata]=useState(mockdata)
    const [searctext,setsearchtext]=useState("")
    const newadd=useSelector((store)=>store.book.items);
    let newarr;
    const navigate=useNavigate();
    
    if(newadd.length>50){
         newarr=newadd.slice(50,)
    }    

    function handlesearch(){
        const filterbook=mockdata.filter((item)=>item.title.toUpperCase().includes(searctext.toUpperCase()));
        setbookdata(filterbook);
    }

    return(
        <div>
        <div className="booklist">
            <div className="search">
                <h3>Search Books</h3>
            <div className="searchbox">
                <input type="text" name="" onChange={(e)=>setsearchtext(e.target.value)} placeholder="Enter the title"/>
                <button type="button" onClick={handlesearch}>Search</button>
             </div>
             </div>
             <section>
             <label htmlFor="">Category</label>
             <select name="category" id="" onChange={(e)=>{
                setcatval(e.target.value);
                (catval==="All" ? navigate('/browse') : navigate(`/books/${e.target.value}`));}}>
                <option value="All" >All</option>
                <option value="Fiction" >Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Mythology">Mythology</option>
                <option value="Sci-fi">Sci-fi</option>
             </select>
                {/* {catval=="All" ? navigate('/browse'):navigate(`/books/${catval}`)} */}
             </section>
             <section className="newad">
             {(newadd.length>50) && newarr.map((book)=>{
             return (
             <div key={book.title} className="additem">
                <p>Below book has been added</p>
               <ul key={book.title}>    
                 <li>Title-{book.title}</li>
                <li>Category -{book.category}</li>
                <img src={dfbook} alt="" className="imgbk" />
                <li>Author -{book.author}</li>
                <li>Publication year -{book.year}</li>
            </ul>
        </div>) }) }
        </section>


            {bookdata.map((book)=>{
                return(
                    <Book key={book.id} book={book}/>
                )
            })}
            
        </div>
        </div>
    )

}


export default Booklist;