import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/service/:serviceId">
                <ServiceDetail />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
