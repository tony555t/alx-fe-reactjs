import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav style={{padding:'10px', background:"#f0f0f0"}}>
            <Link to= '/'style={{marginRight:"10px"}}>Home </Link>
            <Link to= '/about'style={{marginRight:"10px"}}>About </Link>
            <Link to= '/services'style={{marginRight:"10px"}}>Service </Link>
            <Link to= '/ contact'style={{marginRight:"10px"}}>Contact</Link>

        </nav>
    )
}

export default Navbar;