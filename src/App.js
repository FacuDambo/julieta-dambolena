import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />}> 
          </Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
