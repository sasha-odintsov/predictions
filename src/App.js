import "./App.scss"
import Header from "./Header";
import Prediction from "./Prediction";
import Footer from "./Footer";


function App() {
  return(
    <div className="wrapper">
      <Header 
      title1={'Пред'}
      title2={'ска'}
      title3={'за'}
      title4={'ния'}
      />
      <Prediction 
      txtBtn='Получить' 
      lang=''
      />
      <Footer />
    </div>
  )
}

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }

// export default App;
