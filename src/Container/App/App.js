import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About'
import Products from '../../Pages/Products/Products';
import Production from '../../Pages/Production/Production';
import Services from '../../Pages/Services/Services';
import Constructor from '../../Pages/Constructor/Constructor';
import News from '../../Pages/News/News';
import Contacts from '../../Pages/Contacts/Contacts'

const routs = [
  { exect: true, component: <Home />, path: '/', title: 'Home' },
  { component: <About />, path: '/about', title: 'About' },
  { component: <Production />, path: '/production', title: 'Production' },
  { component: <Services />, path: '/services', title: 'Services' },
  { component: <Products />, path: '/products', title: 'Products' },
  { component: <Constructor />, path: '/constructor', title: 'Constructor' },
  { component: <News />, path: '/news', title: 'News' },
  { component: <Contacts />, path: '/contacts', title: 'Contacts' },
];
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {
          routs.map((v, i) => <Route exact path={v.path} key={v.path} >{v.component}</Route>

          )
        }
      </Switch>
    </div>
  );
}

export default App;
