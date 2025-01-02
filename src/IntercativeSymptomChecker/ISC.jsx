import React, { useState } from 'react';
import './IntSymChk.css';

const InteractiveSymptomChecker = () => {
  const partsInfo = {
    head: {
      title: "Head",
      info: "Common symptoms: headache, dizziness, or sinus pain. Can also indicate conditions such as migraine, concussion, or tension headaches."
    },
    neck: {
      title: "Neck",
      info: "Common symptoms: stiffness, pain, or swelling. Can be a sign of conditions like muscle strain, cervical spondylosis, or a herniated disc."
    },
    chest: {
      title: "Chest",
      info: "Common symptoms: chest pain, shortness of breath, or discomfort. These may indicate conditions such as heart disease, pneumonia, pulmonary embolism, or gastrointestinal issues like acid reflux."
    },
    stomach: {
      title: "Stomach",
      info: "Common symptoms: abdominal pain, bloating, nausea, or discomfort. These may suggest conditions like gastritis, peptic ulcers, irritable bowel syndrome (IBS), or gastrointestinal infections."
    },
    "hip-joint": {
      title: "Hip-joint",
      info: "Common symptoms: pain, stiffness, or limited movement. May suggest conditions like osteoarthritis, hip bursitis, or hip fractures."
    },
    "left-arm": {
      title: "Left Arm",
      info: "Common symptoms: numbness, tingling, or weakness. Could indicate nerve compression, carpal tunnel syndrome, or in severe cases, a heart attack."
    },
    "right-arm": {
      title: "Right Arm",
      info: "Common symptoms: numbness, tingling, or weakness. Could indicate nerve compression, carpal tunnel syndrome, or in rare cases, a stroke."
    },
    "left-leg": {
      title: "Left Leg",
      info: "Common symptoms: cramping, swelling, or difficulty walking. May point to issues like poor circulation, muscle strain, or deep vein thrombosis (DVT)."
    },
    "right-leg": {
      title: "Right Leg",
      info: "Common symptoms: cramping, swelling, or difficulty walking. May be due to conditions like muscle strain, arthritis, or circulatory problems."
    },
    "left-shoulder": {
      title: "Left shoulder",
      info: "Common symptoms: pain, stiffness, or limited movement. May be related to rotator cuff injuries, frozen shoulder, or shoulder impingement."
    },
    "right-shoulder": {
      title: "Right shoulder",
      info: "Common symptoms: pain, stiffness, or limited movement. May indicate rotator cuff injuries, frozen shoulder, or shoulder impingement."
    },
    "left-foot": {
      title: "Left foot",
      info: "Common symptoms: pain, swelling, or difficulty walking. May point to conditions like plantar fasciitis, bunions, or Achilles tendonitis."
    },
    "right-foot": {
      title: "Right foot",
      info: "Common symptoms: pain, swelling, or difficulty walking. May be due to conditions like plantar fasciitis, bunions, or Achilles tendonitis."
    },
    "left-knee": {
      title: "Left knee",
      info: "Common symptoms: pain, swelling, or difficulty walking. Can indicate conditions like osteoarthritis, meniscus tear, or ligament injuries."
    },
    "right-knee": {
      title: "Right knee",
      info: "Common symptoms: pain, swelling, or difficulty walking. May point to issues like osteoarthritis, meniscus tear, or ligament injuries."
    },
    "left-hand": {
      title: "Left Hand",
      info: "Common symptoms: pain, numbness, or tingling. May be related to conditions like carpal tunnel syndrome or arthritis."
    },
    "right-hand": {
      title: "Right Hand",
      info: "Common symptoms: pain, numbness, or tingling. May indicate carpal tunnel syndrome or arthritis."
    }
  };

  const [activePart, setActivePart] = useState('');
  const [info, setInfo] = useState({ title: '', info: '' });

  const handlePartClick = (partId) => {
    setActivePart(partId);
    setInfo(partsInfo[partId]);
  };

  return (
    <div className="app">
      <h1>Interactive Symptom Checker</h1>
      <div className="container">
      <div className="diagram-container">
  {/* SVG Human Body */}
  <svg className="body-svg" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle
      className={`body-part ${activePart === 'head' ? 'active' : ''}`}
      cx="100"
      cy="30"
      r="20"
      id="head"
      fill="#f3c5b4"
      onClick={() => handlePartClick('head')}
    />

    {/* Neck */}
    <rect
      className={`body-part ${activePart === 'neck' ? 'active' : ''}`}
      x="90"
      y="50"
      width="20"
      height="10"
      id="neck"
      fill="#f3c5b4"
      onClick={() => handlePartClick('neck')}
    />

    {/* Chest */}
    <rect
      className={`body-part ${activePart === 'chest' ? 'active' : ''}`}
      x="70"
      y="60"
      width="60"
      height="45"
      id="chest"
      fill="#6aa84f"
      onClick={() => handlePartClick('chest')}
    />

    {/* Stomach */}
    <rect
      className={`body-part ${activePart === 'stomach' ? 'active' : ''}`}
      x="70"
      y="105"
      width="60"
      height="45"
      id="stomach"
      fill="#6aa84f"
      onClick={() => handlePartClick('stomach')}
    />

    {/* Hip Joint */}
    <polygon
      className={`body-part ${activePart === 'hip-joint' ? 'active' : ''}`}
      points="80,150 120,150 100,170"
      id="hip-joint"
      fill="#8a6858"
      onClick={() => handlePartClick('hip-joint')}
    />

    {/* Left Arm */}
    <rect
      className={`body-part ${activePart === 'left-arm' ? 'active' : ''}`}
      x="40"
      y="70"
      width="20"
      height="70"
      id="left-arm"
      fill="#f3c5b4"
      onClick={() => handlePartClick('left-arm')}
    />
    <circle
      className={`body-part ${activePart === 'left-hand' ? 'active' : ''}`}
      cx="50"
      cy="150"
      r="10"
      id="left-hand"
      fill="#f3c5b4"
      onClick={() => handlePartClick('left-hand')}
    />
    <circle
      className={`body-part ${activePart === 'left-shoulder' ? 'active' : ''}`}
      cx="60"
      cy="70"
      r="10"
      id="left-shoulder"
      fill="#d9a684"
      onClick={() => handlePartClick('left-shoulder')}
    />

    {/* Right Arm */}
    <rect
      className={`body-part ${activePart === 'right-arm' ? 'active' : ''}`}
      x="140"
      y="70"
      width="20"
      height="70"
      id="right-arm"
      fill="#f3c5b4"
      onClick={() => handlePartClick('right-arm')}
    />
    <circle
      className={`body-part ${activePart === 'right-hand' ? 'active' : ''}`}
      cx="150"
      cy="150"
      r="10"
      id="right-hand"
      fill="#f3c5b4"
      onClick={() => handlePartClick('right-hand')}
    />
    <circle
      className={`body-part ${activePart === 'right-shoulder' ? 'active' : ''}`}
      cx="140"
      cy="70"
      r="10"
      id="right-shoulder"
      fill="#d9a684"
      onClick={() => handlePartClick('right-shoulder')}
    />

    {/* Left Leg */}
    <rect
      className={`body-part ${activePart === 'left-leg' ? 'active' : ''}`}
      x="75"
      y="170"
      width="20"
      height="70"
      id="left-leg"
      fill="#6aa84f"
      onClick={() => handlePartClick('left-leg')}
    />
    <circle
      className={`body-part ${activePart === 'left-knee' ? 'active' : ''}`}
      cx="85"
      cy="210"
      r="10"
      id="left-knee"
      fill="#d9a684"
      onClick={() => handlePartClick('left-knee')}
    />
    <ellipse
      className={`body-part ${activePart === 'left-foot' ? 'active' : ''}`}
      cx="85"
      cy="260"
      rx="12"
      ry="5"
      id="left-foot"
      fill="#8a6858"
      onClick={() => handlePartClick('left-foot')}
    />

    {/* Right Leg */}
    <rect
      className={`body-part ${activePart === 'right-leg' ? 'active' : ''}`}
      x="105"
      y="170"
      width="20"
      height="70"
      id="right-leg"
      fill="#6aa84f"
      onClick={() => handlePartClick('right-leg')}
    />
    <circle
      className={`body-part ${activePart === 'right-knee' ? 'active' : ''}`}
      cx="115"
      cy="210"
      r="10"
      id="right-knee"
      fill="#d9a685"
      onClick={() => handlePartClick('right-knee')}
    />
    <ellipse
      className={`body-part ${activePart === 'right-foot' ? 'active' : ''}`}
      cx="115"
      cy="260"
      rx="12"
      ry="5"
      id="right-foot"
      fill="#8a6858"
      onClick={() => handlePartClick('right-foot')}
    />
  </svg>
</div>

        <div id="info">
          <h3 id="part-title">{info.title || 'Body Part'}</h3>
          <p id="part-info">{info.info || 'Information about this body part.'}</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSymptomChecker;
