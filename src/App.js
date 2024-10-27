import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Home from './component/Home/Home';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';

export default class App extends Component {
  render (){
    return (
      <>
        <h1>This is App React </h1>
        <Navbar/>
        <Home/>
        <About/>
        <Blog/>
        <Footer/>
  
      </>
    )
  }
}

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
