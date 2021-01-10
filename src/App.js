import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" />
        <Route path="/programmes" />
        <Route path="/partners" />
        <Route path="/portfolio" />
        <Route path="/connect" />
        <Route path="/testimonials" />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
