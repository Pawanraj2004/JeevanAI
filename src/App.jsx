import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Detection from "./TeachableMachine/Detection";
import DiagnosisForm from "./diagnose/DiagnosisForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<Detection />} />
        <Route path="/diagnose" element={<DiagnosisForm />} />
      </Routes>
    </div>
  );
};

export default App;
