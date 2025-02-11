import "react-router-dom"
import "./header.css"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

function Header(){

    function handletheme(){
        const html=document.querySelector('html')
        html.classList.toggle('light')
        html.classList.toggle('dark')
    }
const bookInlib=useSelector((store)=>store.book.items)

    return(
        <header className="head">
        <nav>
            <li> <Link to="/" className="linkel">Home</Link></li>
            <li><Link to="/browse" className="linkel">Browse Books</Link></li>
            <li> <Link to="/addbook" className="linkel">Add Books</Link></li>
            <li> Total books in Library  {bookInlib.length}</li>
        </nav>
        <button type="submit" className="toggler" onClick={handletheme}>Toggle Theme</button>
        </header>
    )
}

export default Header;