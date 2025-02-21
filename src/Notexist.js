import Navbar from "./Navbar";
import Footer from "./Footer";

function Noteexist() {
    return (
      <>
      <Navbar/>
        <div className="conatiner text-center mt-5 mb-5">
        
        <h1>404 NOT FOUND</h1>
     
        <p>sorry the page you are looking for does not exist</p>
        </div>
        <Footer/>
        </>
      );
}

export default Noteexist;