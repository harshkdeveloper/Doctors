import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import  Contact  from './components/Contact';
import Doctor from './components/Doctor';
import Blog from './components/Blog';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Switch>
      
      <Route path="/about"component={Aboutus}/>
      <Route path="/contact"component={Contact}/>
      {/* <Route path="contact"component={Contact}/> */}
      <Route path="/doctor"component={Doctor}/>
      <Route path="/blog"component={Blog}/>
      <Route path="/" exact component={Home}/>
    </Switch>


<Footer/>
    </BrowserRouter>
   
  </>
  );
}

export default App;
