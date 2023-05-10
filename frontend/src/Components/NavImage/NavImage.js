import "../Navbar/Navbar.css";
import backgroundimage from "../../assets/landingbackground.jpg";
function NavImage(){
    return(
        <div
            id="intro-example"
            className="container-fluid pt-3 text-center bg-image "
            style={{backgroundImage: `url(${backgroundimage})` , height : `15rem`}}
        >
            <div className="mask" id="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white align-items-center">
                <h1 className="mb-3">How is the Weather Today</h1>
                <h5 className="mb-4">Let find out !!!!</h5>
                </div>
            </div>
            </div>
        </div>
    );
}

export default NavImage;