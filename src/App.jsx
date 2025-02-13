import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Detection from "./Detection/detection";
import DiagnosisForm from "./diagnose/DiagnosisForm";
import Quiz from "./quiz/quiz";
import EyeDetection from "./Detection/Eye/Detection";
import SkinDetection from "./Detection/Skin/Detection";
import InteractiveSymptomChecker from "./IntercativeSymptomChecker/ISC";
import Footer from "./components/footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<Detection />} />
        <Route path="/diagnose" element={<DiagnosisForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/skindetection" element={<SkinDetection />} />
        <Route path="/eyedetection" element={<EyeDetection />} />
        <Route path="/ich" element={<InteractiveSymptomChecker />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
