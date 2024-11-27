import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
// Change this import to use named import if you prefer
import Home from "./pages/Home";
// import { Page1 } from "./pages/Page1";
// import { Page2 } from "./pages/Page2";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
