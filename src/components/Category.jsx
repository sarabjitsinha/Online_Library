/* eslint-disable react/no-unknown-property */
import { useParams } from "react-router-dom";
import { mockdata } from "../Utils/Mockdata";
import { useState } from "react";
import "./book.css"

function Category(){

    const params=useParams();
    const [filterdata]=useState(mockdata.filter((book)=>book.category===params.category));
    console.log(params)

    return (
        <div>
        <h2 align="center" >You are viewing the {params.category} books</h2>
        <div className="cat">
            
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
                    
                )
            })}
        </div>
        </div>
    )
}

export default Category;