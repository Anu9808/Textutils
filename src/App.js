// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Contact from './components/Contact';
import About from './components/About';
// import Alert from './components/Alert';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (

    <Router>
    <Navbar title="TextUtils" aboutText = "About" />
    {/* <Alert /> */}
      <div>
      <Switch>
          <Route exact path="/">
          <Textform heading="Try TextUtils - Manipulate your text Easily!"/>
          </Route>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
