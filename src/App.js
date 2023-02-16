import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./components/Projects";
import BidStatus from "./components/BidStatus";
import PurchasingStatus from "./components/PurchasingStatus";
import SelectionStatus from "./components/SelectionStatus";

function App() {
  return (
      <Router>
    <div className="App">
      <header>Selection and Purchasing Status</header>
        <Routes>
            <Route path="/" element={<Projects/>}></Route>
            <Route path="/bid" element={<BidStatus/>}></Route>
            <Route path="/selection" element={<SelectionStatus/>}></Route>
            <Route path="/purchasing" element={<PurchasingStatus/>}></Route>
        </Routes>
    </div>
      </Router>
  );
}

export default App;
