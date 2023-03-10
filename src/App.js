import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./components/Projects";
import PurchasingStatus from "./components/PurchasingStatus/PurchasingStatus";
import SelectionStatus from "./components/SelectionStatus/SelectionStatus";
import ViewProject from "./components/ViewProject";
import 'bootstrap/dist/css/bootstrap.css';
import AddProjectForm from "./components/AddProjectForm";
import ViewAllProjects from "./components/ViewAllProjects";

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
            <Route path="/AllProjects" element={<ViewAllProjects/>}></Route>
        </Routes>
    </div>
      </Router>
  );
}

export default App;
