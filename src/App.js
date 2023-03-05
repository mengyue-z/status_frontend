import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./components/Projects";
import BidStatus from "./components/BidStatus";
import PurchasingStatus from "./components/PurchasingStatus";
import SelectionStatus from "./components/SelectionStatus";
import ViewProject from "./components/ViewProject";
import SelectorEngine from "bootstrap/js/src/dom/selector-engine";
import AddProjectForm from "./components/AddProjectForm";

function App() {
  return (
      <Router>
    <div className="App">
      <header>Selection and Purchasing Status</header>
        <Routes>
            <Route path="/" element={<Projects/>}></Route>
            <Route path="/project/:id" element={<ViewProject/>}></Route>
            <Route path="/new-project" element={<AddProjectForm/>}></Route>
            <Route path="/selection" element={<SelectionStatus/>}></Route>
            <Route path="/purchasing" element={<PurchasingStatus/>}></Route>
        </Routes>
    </div>
      </Router>
  );
}

export default App;
