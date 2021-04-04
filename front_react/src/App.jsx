import './App.css';
import NavigationBar from './Component/NavigationBar'
import Login from './Component/Login'
import Home from './Component/Home'
import Registration from './Component/Registration'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <Route path="/" exact={true} component={Home} />
        <Route path="/Login" exact={true} component={Login} />
        <Route path="/Registration" exact={true} component={Registration} />
      </BrowserRouter>
    </div>
  );
}

export default App;
