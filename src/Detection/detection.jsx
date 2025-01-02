import { Link } from "react-router-dom";

const Detection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          padding: "20px",
          backgroundColor: "white",
          width: "200px",
        }}
      >
        <Link to="/skindetection" style={{ textDecoration: "none", color: "inherit" }}>
          <img
            src="face-scan.gif"
            alt="Skin Detection"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h2 style={{ marginTop: "10px", fontSize: "18px", fontWeight: "600" }}>
            Skin Detection
          </h2>
        </Link>
      </div>
      <div
        style={{
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          padding: "20px",
          backgroundColor: "white",
          width: "200px",
        }}
      >
        <Link to="/eyedetection" style={{ textDecoration: "none", color: "inherit" }}>
          <img
            src="vision.gif"
            alt="Eye Detection"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h2 style={{ marginTop: "10px", fontSize: "18px", fontWeight: "600" }}>
            Eye Detection
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Detection;
