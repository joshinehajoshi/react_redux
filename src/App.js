import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';

function App() {  

  return (
    
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
