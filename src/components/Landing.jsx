
import  fic from "../Utils/fiction/fic.jpeg"
import fic2 from '../Utils/fiction/fic2.jpg'
import fic1 from '../Utils/fiction/fic1.webp'
import fic3 from '../Utils/fiction/fic3.jpeg'
import fic4 from '../Utils/fiction/fic4.jpeg'
import pic1 from '../Utils/non-fiction/pic1.jpeg'
import pic2 from '../Utils/non-fiction/pic2.webp'
import pic3 from '../Utils/non-fiction/pic3.jpeg'
import pic4 from '../Utils/non-fiction/pic4.png'
import pic5 from '../Utils/non-fiction/pic5.webp'
import  m1  from '../Utils/mythology/m1.png'
import  m2  from '../Utils/mythology/m2.jpg'
import  m3  from '../Utils/mythology/m3.jpg'
import  m4  from '../Utils/mythology/m4.jpg'
import  m5  from '../Utils/mythology/m5.jpg'
import  s1 from  '../Utils/sci-fi/s1.jpeg'
import  s2 from  '../Utils/sci-fi/s2.jpg'
import  s3  from '../Utils/sci-fi/s3.jpeg'
import  s4  from '../Utils/sci-fi/s4.avif'
import  s5  from '../Utils/sci-fi/s5.jpeg'

import "./landing.css"
import { Link } from "react-router-dom"

function Landing(){
    return(
        <div>
            <div className="fiction">
                <h3>Collection of fiction books</h3>
                <hr />
            <Link to='/book/1'><img src={fic} alt="" /></Link>
            <Link to='/book/2'><img src={fic1} alt="" /></Link>
            <Link to='/book/3'><img src={fic2} alt="" /></Link>
            <Link to='/book/4'><img src={fic3} alt="" /></Link>
            <Link to='/book/5'><img src={fic4} alt="" /></Link>
            </div>

            <div className="non-fiction">
                <h3>Collection of Non-fiction books</h3>
                <hr />
                <Link to='/book/11'><img src={pic1} alt="" /></Link>
                <Link to='/book/12'> <img src={pic2} alt="" /></Link>
                <Link to='/book/13'><img src={pic3} alt="" /></Link>
                <Link to='/book/14'><img src={pic4} alt="" /></Link>
                <Link to='/book/15'><img src={pic5} alt="" /></Link>
            </div>

            <div className="mythology">
                <h3>Collection of Mythological books</h3>
                <hr />
                <Link to='/book/6'><img src={m1} alt="" /></Link>
                <Link to='/book/7'><img src={m2} alt="" /></Link>
                <Link to='/book/8'><img src={m3} alt="" /></Link>
                <Link to='/book/9'><img src={m4} alt="" /></Link>
                <Link to='/book/10'><img src={m5} alt="" /></Link>
            </div>
           
            <div className="sci-fi">
                <h3>Collection of Sci-Fi books</h3>
                <hr />
                <Link to='/book/16'><img src={s1} alt="" /></Link>
                <Link to='/book/17'><img src={s2} alt="" /></Link>
                <Link to='/book/18'><img src={s3} alt="" /></Link>
                <Link to='/book/19'><img src={s4} alt="" /></Link>
                <Link to='/book/20'><img src={s5} alt="" /></Link>
            </div>
        </div>
        
    )
}

export default Landing;