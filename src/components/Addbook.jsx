import "./addbook.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../Utils/bookSlice";
import { useNavigate } from "react-router-dom";


function Addbook(){

    const [title,settitle]=useState()
    const [category,setgenre]=useState()
    const [author,setauthor]=useState()
    const [year,setyear]=useState()
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handleadd(){
        let obj={
            title:title,
            category:category,
            author:author,
            year:year
        }

        
        if((author) && (title) && (category) && (year)) 
        {
            dispatch(additem(obj))
        } 

        
    }

    function adtitle(e){
        const regex=/^\w[a-z0-9A-Z]\w*$/
        if(e.target.value.match(regex)){
            settitle(e.target.value)
            return true;
        }
        else{
            
            return false;
        }

    }

    function authors(e){
        let regex=/^[a-zA-Z]*$/
        if(e.target.value.match(regex))
        {
            setauthor(e.target.value)
            return true;
        }
        else{
            
            return false
        }
    }

    function genre(e){
        const regex=/^[a-zA-Z]*$/
        if(e.target.value.match(regex))
        {
            setgenre(e.target.value);
            return true;
        }
        else
        {
            
            return false;
        }
    }

    function checkval(e){
        let regex=/^[0-9]{4}$/;
       if (e.target.value.match(regex))
       {
        setyear(e.target.value)
        return true;
       }
       else
       {
        
        return false;
       }
         }

    return(
        <div>
        <div className="formdiv">
            <form action="" className="formel" onSubmit={(e)=>{e.preventDefault();
                //  setbookdata([...bookdata,inputdata]);
               if((author)&& (title) && (category) && (year))
                { navigate('/browse');}
               else{
                alert("please enter valid data")}}}>
             <div className="labeldiv">
             <label htmlFor=""> Title </label>
             <input type="text" name="" id="" title="Please enter characters only" autoComplete="off" onChange={(e)=>adtitle(e)}/>    
             </div>   
            <div className="labeldiv">
            <label htmlFor=""> Category</label>
            <input type="text" name="" id="" title="Enter category" autoComplete="off" onChange={(e)=>genre(e)}/>
            </div>
            <div className="labeldiv">
            <label htmlFor="">Author Name</label>
            <input type="text" name="" id="" title="Alphabets only" autoComplete="off" onChange={(e)=>authors(e)}/>
            </div>
            <div className="labeldiv">
            <label htmlFor=""> Publication year</label>
            <input type="text" name="" id="" autoComplete="off" onChange={(e)=>checkval(e)} maxLength='4' title="Only 4 digits"/>
            </div>
            <button className="formsub" onClick={handleadd}>submit </button>
            </form>
             </div>
             
            
            
            </div>

    )
}

export default Addbook;