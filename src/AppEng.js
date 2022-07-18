import Header from "./Header";
import Prediction from "./Prediction";
import Footer from "./Footer";

function AppEng() {
    return(
      <div className="wrapper">
        <Header 
        title1={'Pre'}
        title2={'dic'}
        title3={'ti'}
        title4={'ons'}
        />
        <Prediction 
        txtBtn='Get' 
        lang='eng'
        />
        <Footer />
      </div>
    )
  }
  
  export default AppEng;