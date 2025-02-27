/* eslint-disable react/prop-types */

import "./book.css"
import { Link } from "react-router-dom";

function Book(props){

    return(
        <div className="browsebook">
           
    <ul key={props.book.id} className="displaybrowse">
                    <li>Book Id :-{props.book.id}</li>
                    <li>Publication Year :- {props.book.publication_year}</li>
                    <li>Title :-{props.book.title}</li>  
                    <li><img src={props.book.cover_image} className="imgbk"/></li> 
                    <li>Author :-{props.book.author}</li> 
                    <li>Description :-{props.book.description}</li>
                    <li><Link to={`/book/${props.book.id}`}>View Details</Link></li>
     </ul>
     </div>
    )
}

export default Book;