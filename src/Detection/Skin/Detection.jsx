import { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import Webcam from "react-webcam";
import LabelDisplay from "./LabelDisplay";

const SkinDetection = () => {
  const [isLiveFeed, setIsLiveFeed] = useState(true);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const webcamRef = useRef(null);

  const modelURL = "https://teachablemachine.withgoogle.com/models/7AFcHGH3O/";

  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsLoading(true);
        const loadedModel = await tmImage.load(
          modelURL + "model.json",
          modelURL + "metadata.json"
        );
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading the model:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadModel();
  }, []);

  const handlePredictions = async (img) => {
    if (model) {
      setIsLoading(true);
      const predictions = await model.predict(img);
      setPredictions(predictions);
      setIsLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      setUploadedImage(img.src);
      img.onload = () => handlePredictions(img);
    }
  };

  const handleLiveFeedCapture = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const img = new Image();
      img.src = imageSrc;
      setUploadedImage(img.src);
      img.onload = () => handlePredictions(img);
    }
  };

  return (
    <div className="detection">
      <h1>Teachable Machine Image Model</h1>
      <div className="toggler">
        <label>
          <input
            type="radio"
            name="mode"
            value="live"
            checked={isLiveFeed}
            onChange={() => {
              setIsLiveFeed(true);
              setUploadedImage(null);
            }}
          />
          Live Feed
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="upload"
            checked={!isLiveFeed}
            onChange={() => {
              setIsLiveFeed(false);
              setUploadedImage(null);
            }}
          />
          Upload Image
        </label>
      </div>

      {isLiveFeed ? (
        <div>
          <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={300} />
          <button onClick={handleLiveFeedCapture}>Capture & Predict</button>
        </div>
      ) : (
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      )}

      {uploadedImage && (
        <div className="image-preview">
          <h3>Preview:</h3>
          <img src={uploadedImage} alt="Uploaded Preview" width={300} />
        </div>
      )}

      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <LabelDisplay predictions={predictions} />
      )}
    </div>
  );
};

export default SkinDetection;
