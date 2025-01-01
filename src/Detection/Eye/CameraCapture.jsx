import { useRef } from "react";
import PropTypes from "prop-types";
import Webcam from "react-webcam";

const CameraCapture = ({ model, setPredictions, setIsLoading }) => {
  const webcamRef = useRef(null);

  const captureAndPredict = async () => {
    if (webcamRef.current && model) {
      const imageSrc = webcamRef.current.getScreenshot();
      const img = new Image();
      img.src = imageSrc;
      img.onload = async () => {
        try {
          setIsLoading(true);
          const predictions = await model.predict(img);
          setPredictions(predictions);
        } catch (error) {
          console.error("Error during prediction:", error);
          setPredictions([]);
        } finally {
          setIsLoading(false);
        }
      };
    }
  };

  return (
    <div>
      <h3>Camera Capture</h3>
      <div className="webcam-container">
        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={300} />
      </div>
      <button onClick={captureAndPredict} disabled={!model}>
        Capture & Predict
      </button>
    </div>
  );
};

CameraCapture.propTypes = {
  model: PropTypes.object,
  setPredictions: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default CameraCapture;
          