import { useParams } from "react-router-dom";
import { mockdata } from "../Utils/Mockdata";
import { useState } from "react";
import "./book.css"
import { Link } from "react-router-dom";

function Bookdetails(){

    const params=useParams();
    const [filterdata]=useState(mockdata.filter((book)=>book.id==params.id));
    
    return(
        <div className="detail">
            <h1>Showing Book details </h1>
            {filterdata.map((book)=>{
                return(
                        <ul key={book.id}>
                            <li>Book Id :-{book.id}</li>
                            <li>Publication Year :- {book.publication_year}</li>
                            <li>Title :-{book.title}</li>  
                            <li><img src={book.cover_image} className="imgbk"/></li> 
                            <li>Author :-{book.author}</li> 
                            <li>Description :-{book.description}</li>
                            <li>category-{book.category}</li>
                        </ul>
                )    })
            }
            <button><Link to="/browse">Back to browse</Link></button>
        </div>
    )
}

export default Bookdetails;