import PropTypes from "prop-types";

const ImageUpload = ({ model, setPredictions, setIsLoading }) => {
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file && model) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
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
      <h3>Image Upload</h3>
      <input type="file" accept="image/*" onChange={handleUpload} disabled={!model} />
    </div>
  );
};

ImageUpload.propTypes = {
  model: PropTypes.object,
  setPredictions: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default ImageUpload;
