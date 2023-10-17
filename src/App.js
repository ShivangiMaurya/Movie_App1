import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import { Container } from '@mui/material';

import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
     <Header/>
         <div className="app">
           
            {/* <Container> */}
              {/* <Switch> */}
              <Routes>
              <Route path="/" element={<Trending />}/>
              <Route path="movies" element={<Movies/>} />
              <Route path="series" element={<Series/>} />
              {/* <Route path="search" element={<Search/>} /> */}

          {/* <Route path="*" element={<NoPage />} /> */}
                {/* <Route path="/" component={Trending} exact/>
                <Route path="/movies" component={Movies} />
                <Route path="/series" component={Series} /> */}
                {/* <Route path="/search" component={Search} /> */}
                </Routes>

              {/* </Switch> */}
            {/* </Container?> */}
         </div>
         <SimpleBottomNavigation/>
     </BrowserRouter>
  );
}

export default App;
