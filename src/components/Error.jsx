import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error(){
     
    const err=useRouteError();

    return(
        <div>
            <p>OOPs!!! Error -- Enter correct path</p>
            <p>{err.data}</p>
            <Link to="/">Back to Home</Link>
            
        </div>

    )
}

export default Error;