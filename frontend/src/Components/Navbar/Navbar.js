import "../Navbar/Navbar.css";
import navlogo from "../../assets/navicon.png";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <div className="container-fluid">
                <div className="container-fluid" id="navitem-container">
                    <img src={navlogo} className="round-pill navbar-brand" id="navlogo" ></img>
                    <p>Homepage</p>
                    <p>How to use</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;