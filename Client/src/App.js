import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/home';
import { path } from './utils/constant';
import Place from './pages/Place/Place';
import CreatePlace from './pages/Place/CreatePlace';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path={path.HOME} element={<Home />} >
          </Route>
          <Route path={path.AIRBNBYOURHOME} element={<Place />} />
          <Route path={path.place} element={<CreatePlace />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
