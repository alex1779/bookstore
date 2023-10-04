import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import ErrorPage from './components/Errorpage';

function App() {
  return (
    <Provider store={Store}>
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
