import "react-router-dom"
import "./App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import  {Provider}  from "react-redux";
import { Outlet } from "react-router-dom";
import "@reduxjs/toolkit"
import appStore from "./Utils/appStore";

function App(){
  let obj={textAlign:"center"}

return(

  <div>
    
    <main>
      <Provider store={appStore}>
      <Header/>
     
      
     <h2 style={obj}>Welcome to the online Library</h2>
     
     <Outlet/>
    
     </Provider>
    </main>
   
    <Footer/>
  </div>

)

}

export default App;