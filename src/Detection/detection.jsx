import { Link } from "react-router-dom";
const Detection = () => {
    return (
      <div>
        <h1>
        <Link to="/skindetection">SkinDetection</Link>
        </h1>
        <h1>
        <Link to="/eyedetection">EyeDetection</Link>
        </h1>
      </div>
    );
  };
  
  export default Detection;
  