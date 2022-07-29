import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import AboutMe from './components/About Me/AboutMe';
import Services from './components/Services/Services';
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {

    return (
        <div className="App">
            <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
            </Router>
        </div>
    );
}

export default App;
